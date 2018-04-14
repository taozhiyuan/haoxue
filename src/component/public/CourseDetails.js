
// 课程详情
import React, { Component } from 'react';
import Path from '../agency/Path.js';
import CourseMain from '../ChildClass/CourseMain.js';
import Teachers from '../ChildClass/Teachers.js';
import Lecturer from '../ChildClass/Lecturer.js';
import Evaluate from '../ChildClass/Evaluate.js';
import CourseDideBar from '../ChildClass/CourseDideBar.js';
import CourseBeforehand from './CourseBeforehand.js';

import { Route } from "react-router-dom";
import Axios from '../../request/axiosHome.js';

export default class CourseDetails extends Component {
    constructor(){
        super()
        this.state = {
            data : []
        }
    }
    componentWillMount(){
        Axios.courseDetails().then((res)=>{
            // console.log(res.data.result)
            this.setState({
                data : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        // console.log(this.state.data)
        const { path } = this.props.match;
        return (
            <div className="course-details">
                <Route path={ `${path}/courseBeforehand` } component={ CourseBeforehand } />
                <Route path={ path } render={ ({ match })=>(
                    <div className="main-public">
                        <Path />
                        <CourseMain url={ match.url }/>
                        <Teachers />
                        <Lecturer />
                        <Evaluate />
                        <CourseDideBar to={ match.url } data={ this.state.data }/>
                    </div>
                ) } />
            </div>
        );
    }
}