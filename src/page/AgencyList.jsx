
// 教培机构
import React, { Component } from 'react';
import Nav from '../component/agency/Nav.js';
import List from '../component/agency/List.js';
import LoadMore from '../component/agency/LoadMore.js';
import AgencyDetailed from '../component/public/AgencyDetailed.js';

import Axios from '../request/axiosHome.js';
import { Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

export default class Agency extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            select : [],
            type : { index : 0, id : 0 },
            area : { index : 0, id : 0 },
            sortId : { index : 0, id : 0 },
            sort : ['synthesiss','scale','praise'],
            sortText : ['综合','规模','人气'],
            classType : [],
        }
        console.log( 1, this.context )
    };
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    componentWillMount = () => {
        Axios.MechanismList().then((res)=>{
            this.setState({
                data : res.data.result,
                select : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
        // 类型分类
        Axios.contentType().then((res)=>{
            let arr = [];
            for (const iterator of res.data.result) {
                if(iterator.classifyType === "1"){
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
        // console.log( this.context )
        // this.context.AgencyList
        const { path } = this.props.match;
        const { select, area, type, sortId, classType } = this.state;
        if(select.length < 1){ return false }
        return (
            <div className="agency">
                <Switch>
                    <Route path={ `${path}/:topicId` } component={ AgencyDetailed } />
                    <Route path={ path } render={({ match })=>(
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
                            <List path={ match.url } data={ select }/>
                            { this.state.hasError && <LoadMore /> }
                        </div>
                    )} />
                </Switch>
            </div>
        );
    }
}

Agency.contextTypes = {
    AgencyList : PropTypes.array,
};