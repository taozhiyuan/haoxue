
//全部师资列表
import React, { Component } from 'react';
import Path from '../agency/Path.js';
import TeacherItem from '../introduce/TeacherItem.js';
import Paging from '../home/Paging.js';
import TeacherDetailed from './TeacherDetailed.js';

import Axios from '../../request/axiosHome.js';
import './AllTeacherList.css';
import { Switch, Route } from "react-router-dom";

export default class AllTeacherList extends Component {
    constructor(){
        super()
        this.state = {
            data : []
        }
    }
    componentWillMount(){
        Axios.teacherList().then((res)=>{
            this.setState({
                data : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        const data = this.state.data;
        const { path, url } = this.props.match;
        return (
            <Switch>
                <Route path={ `${path}/teacher` } component={ TeacherDetailed } />
                <Route path={ path } render={ ()=>(
                    <div className="all-teacher">
                        <div className="main-public">
                            <Path />
                            <ul className="all-teacher-list">
                                { data.map((item,index)=>(
                                    <TeacherItem data={ item } key={ index } url={ url }/>
                                )) }
                            </ul>
                            <Paging />
                        </div>
                    </div>
                ) } />
            </Switch>
        );
    }
}