import React, { Component } from 'react';
import Nav from '../component/agency/Nav.js';
import List from '../component/parentClass/List.js';
import CourseDetails from '../component/public/CourseDetails.jsx';
import LoadMore from '../component/agency/LoadMore.js';

import Axios from '../request/axiosHome.js';
import { Route, Switch } from "react-router-dom";

export default class ChildClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            select : [],
            type : { index : 0, id : 0 },
            area : { index : 0, id : 0 },
            sortId : { index : 0, id : 0 },
            sort : ['synthesiss','scale','praise'],
            sortText : ['综合','价格','人气'],
            classType : [],
        }
    };
    componentWillMount = () => {
        Axios.parentClassList().then((res)=>{
            let arr = [];
            for( let i of res.data.result ){
                if(i.courseType==="child"){
                    arr = [...arr,i]
                }
            }
            this.setState({
                data : arr,
                select : arr
            })
        }).catch((err)=>{
            console.log(err)
        })
        // 类型分类
        Axios.contentType().then((res)=>{
            let arr = [];
            for (const iterator of res.data.result) {
                if(iterator.classifyType === "2"){
                    arr = [...arr,iterator]
                }
            }
            this.setState({
                classType : [{ id: 0, typeName : "全部" },...arr],
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
        this.setState({ select : this.select( area.id, id, 'courseClassify','areaid',data ) });
    }
    getArea = ( id ) => {
        const { data, type } = this.state;
        this.setState({ area : { id: id } });
        this.setState({ select : this.select( type.id, id, 'areaid','courseClassify',data ) });
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
        // console.log(this.props.match)
        const { path } = this.props.match;
        const { select, area, type, sortId, classType } = this.state;
        return (
            <Switch>
                <Route path={ `${ path }/course` } component={ CourseDetails } />
                <Route path={ path } render={({ match })=>(
                    <div className="child-class">
                        <div className="main-public">
                            <Nav 
                                getType={ this.getType } 
                                getArea={ this.getArea } 
                                getSort={ this.getSort }
                                sortText={ this.state.sortText }
                                area={ area.index }
                                type={ type.index }
                                sortId={ sortId.index }
                                classType={ classType }
                            />
                            <List url={ match.url } data={ select }/>
                        </div>
                    </div>
                )} />
            </Switch>
        );
    }
}