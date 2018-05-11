
//全部课程列表
import React, { Component } from 'react';
import Path from '../../component/public/Path.jsx';
import ItemMin from '../../component/course/ItemMin.jsx';
import Paging from '../../component/public/Paging.jsx';
import CourseDetails from './CourseDetails.jsx';
import './AllCoursesList.css';

import Axios from '../../global/axios.js';
import { Switch, Route } from "react-router-dom";

export default class AllCoursesList extends Component {
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