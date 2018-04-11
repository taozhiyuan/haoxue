
// 课程详情
import React, { Component } from 'react';
import Path from '../agency/Path.js';
import CourseMain from '../ChildClass/CourseMain.js';
import Teachers from '../ChildClass/Teachers.js';
import Lecturer from '../ChildClass/Lecturer.js';
import Evaluate from '../ChildClass/Evaluate.js';
import CourseDideBar from '../ChildClass/CourseDideBar.js';

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
            console.log(res.data.result)
            this.setState({
                data : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        console.log(this.state.data)
        return (
            <div className="course-details">
                <div className="main-public">
                    <Path />
                    <CourseMain />
                    <Teachers />
                    <Lecturer />
                    <Evaluate />
                    <CourseDideBar to={ this.props.match.url } data={ this.state.data }/>
                </div>
            </div>
        );
    }
}