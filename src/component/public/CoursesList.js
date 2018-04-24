
//全部课程列表
import React, { Component } from 'react';
import Path from '../agency/Path.js';
import ItemMin from '../parentClass/ItemMin.js';
import Paging from '../home/Paging.js';
import CourseDetails from './CourseDetails.js';

import Axios from '../../request/axiosHome.js';
import './CoursesList.css';
import { Switch, Route } from "react-router-dom";

export default class CoursesList extends Component {
    constructor(){
        super()
        this.state = {
            data : []
        }
    }
    componentWillMount(){
        Axios.coursesList().then((res)=>{
            this.setState({
                data : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        const data = this.state.data;
        const { path } = this.props.match;
        // console.log(url)
        return (
            <Switch>
                <Route path={ `${path}/CourseDetails` } component={ CourseDetails } />
                <Route path={ path } render={ ({match})=>(
                    <div className="courses">
                        <div className="main-public">
                            <Path />
                            <ul className="courses-list">
                                { data.map((item,index)=>(
                                    <ItemMin data={ item } key={ index } url={ match.url }/>
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