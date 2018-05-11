
// 父母课堂
import React, { Component } from 'react';
import NavAreaType from '../../component/public/ClassSorting/NavAreaType.jsx';
import NavContentType from '../../component/public/ClassSorting/NavContentType.jsx';
import NavSort from '../../component/public/ClassSorting/NavSort.jsx';
import Path from '../../component/public/Path.jsx';

import List from '../../component/course/List.jsx';
import CourseDetails from './CourseDetails.jsx';
 
import Axios from '../../global/axios.js';
import { Route, Switch } from "react-router-dom";

export default class ParentClass extends Component {
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
                if(i.courseType==="parent"){
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
        Axios.contentType({ classifyType : 'parent' }).then((res)=>{
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
        this.setState({ select : this.select( area.id, id, 'courseClassify','areaid',data ) });
    }
    getArea = ( id ) => {
        const { data, type } = this.state;
        this.setState({ area : { id: id } });
        this.setState({ select : this.select( type.id, id, 'areaid','courseClassify',data ) });
    }
    getSort = ( data ) => {
        this.setState({
            select : data
        })
    }
    render() {
        const { path } = this.props.match;
        const { select, area, type, sortId, classType } = this.state;
        return (
            <Switch>
                <Route path={ `${path}/course` } component={ CourseDetails } />
                <Route exact path={ path } render={({ match })=>(
                    <div className="parent-class">
                        <div className="main-public">
                            <Path />
                            <nav className="nav-class-sorting">
                                <NavAreaType 
                                    getArea={ this.getArea } 
                                />
                                <NavContentType 
                                    getType={ this.getType } 
                                    classType={ classType }
                                />
                                <NavSort 
                                    getSort={ this.getSort } 
                                    data={ select }
                                />
                            </nav>
                            <List url={ match.url } data={ select }/>
                        </div>
                    </div>
                )} />
            </Switch>
        );
    }
}