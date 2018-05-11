
// 教培机构列表
import React, { Component } from 'react';
import NavAreaType from '../../component/public/ClassSorting/NavAreaType.jsx';
import NavContentType from '../../component/public/ClassSorting/NavContentType.jsx';
import NavSort from '../../component/public/ClassSorting/NavSort.jsx';

import AgencyItem from '../../component/agency/AgencyItem.jsx';
import AgencyDetailed from './AgencyDetailed.jsx';

import Axios from '../../global/axios.js';
import { Route, Switch } from "react-router-dom";

export default class Agency extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            select : [],
            type : { index : 0, id : 0 },
            area : { index : 0, id : 0 },
            sortId : { index : 0, id : 0 },
            classType : [],
        }
    };
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    componentWillMount = () => {
        console.log("这里")
        Axios.MechanismList().then((res)=>{
            this.setState({
                data : res.data.result,
                select : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
        // 类型分类
        Axios.contentType({ classifyType : 'orgType' }).then((res)=>{
            this.setState({
                classType : [{ id: 0, typeName : "全部" }, ...res.data.result],
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    select = ( OtherId, targetId, props1, props2, data ) => {
        let arr = [];
        if( OtherId===0 ){
            if( targetId===0 ){
                arr = data;
            }else{
                for (let i of data) {
                    if(i[props1] === targetId){
                        arr = [...arr,i]
                    }
                }
            }
        }else{
            for (let i of data) {
                if(i[props2] === OtherId){
                    arr = [...arr,i]
                }
            }
            if(targetId!==0){
                let arrtype = [];
                for (let i of arr) {
                    if(i[props1] === targetId){
                        arrtype = [...arrtype,i]
                    }
                }
                arr = arrtype;
            }
        }
        return arr;
    }
    getType = ( id ) => {
        this.setState({type : { id : id }})
        const { data, area } = this.state;
        this.setState({ select : this.select( area.id, id, 'orgClassify','areaid',data ) });
    }
    getArea = ( id ) => {
        const { data, type } = this.state;
        this.setState({ area : { id: id } });
        this.setState({ select : this.select( type.id, id, 'areaid','orgClassify',data ) });
    }
    getSort = ( id ) => {
        this.setState({ sortId : { id:id } })
        const { sort } = this.state;
        const compare = (obj1, obj2) => {
            const val1 = obj1[sort[id]];
            const val2 = obj2[sort[id]];
            if (val1 < val2) {
                return 1;
            } else if (val1 > val2) {
                return -1;
            } else {
                return 0;
            }            
        }
        this.setState({
            select : this.state.select.sort(compare)
        })
    }
    render() {
        const { path } = this.props.match;
        const { select, area, type, sortId, classType } = this.state;
        if(select.length < 1){ return false }
        return (
            <div className="agency">
                <Switch>
                    <Route path={ `${path}/agency` } component={ AgencyDetailed } />
                    <Route exact path={ path } render={({ match })=>(
                        <div className="main-public">
                            <nav className="nav-class-sorting">
                                <NavAreaType getType={ this.getType } type={ type.index }/>
                                <NavContentType getArea={ this.getArea } area={ area.index } classType={ classType }/>
                                <NavSort getSort={ this.getSort } sortId={ sortId.index }/>
                            </nav>

                            <ul className="agency-course-list">
                                { select.map((item, index)=>(
                                    <AgencyItem 
                                        url={ match.url }
                                        data={ item }
                                        key={ index }
                                    />
                                )) }
                            </ul>
                        </div>
                    )} />
                </Switch>
            </div>
        );
    }
}