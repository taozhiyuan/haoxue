
// 课程详情
import React, { Component } from 'react';
import Path from '../agency/Path.js';
import CourseMain from '../ChildClass/CourseMain.js';
import AgencyInfo from '../ChildClass/AgencyInfo.js';
import Lecturer from '../ChildClass/Lecturer.js';
import Evaluate from '../ChildClass/Evaluate.js';
import CourseBeforehand from './CourseBeforehand.js';
import ItemMin from '../parentClass/ItemMin.js';
import './CourseDetails.css';

import { Switch, Route } from "react-router-dom";
import Axios from '../../request/axiosHome.js';
import { getUrlParam } from '../../request/getUrlParam.js';
import PropTypes from'prop-types';

export default class CourseDetails extends Component {
    constructor(){
        super()
        this.state = {
            data : null,
            teacherList : null,
            SimilarCourses : null
        }
    }
    componentWillMount(){
        Promise.all([
            Axios.courseDetails({
                ip : window.returnCitySN["cip"],
                id : getUrlParam(this.props.location).id,
                // id : '1'
            }),
            Axios.courseTeacherList({ courseId : getUrlParam(this.props.location).id }),
            Axios.SimilarCourses({ courseId : getUrlParam(this.props.location).id })
        ]).then(([
            courseDetails,
            courseTeacherList,
            SimilarCourses
        ])=>{
            this.setState({
                data : courseDetails.data.result,
                teacherList : courseTeacherList.data.result,
                SimilarCourses : SimilarCourses.data.result
            })
        })
    }
    componentWillReceiveProps(nextProps){
        Promise.all([
            Axios.courseDetails({
                ip : window.returnCitySN["cip"],
                id : getUrlParam(nextProps.location).id,
                // id : '1'
            }),
            Axios.courseTeacherList({ courseId : getUrlParam(this.props.location).id }),
            Axios.SimilarCourses({ courseId : getUrlParam(this.props.location).id })
        ]).then(([
            courseDetails,
            courseTeacherList,
            SimilarCourses
        ])=>{
            this.setState({
                data : courseDetails.data.result,
                teacherList : courseTeacherList.data.result,
                SimilarCourses : SimilarCourses.data.result
            })
        })
    }
    render() {
        const { path } = this.props.match;
        const { search } = this.props.location;
        const { data, teacherList, SimilarCourses } = this.state;
        if(!data){return false}
        return (
            <Switch>
                <Route exact path={ path } render={ ({ match })=>(
                    <div className="course-details">
                        <div className="main-public">
                            <Path />
                            <CourseMain 
                                url={ match.url } 
                                data={ data } 
                                search={ search }
                                location={ this.props.location }
                            />
                            <AgencyInfo data={ data.richTextKey } />
                            <Lecturer data={ teacherList }/>
                            <Evaluate data={ data.courseBewrite }/>
                            <div className="course-dide-bar">
                                <h5>类似课程推荐</h5>
                                <ul>
                                    {SimilarCourses.map((item,index)=>(
                                        <ItemMin data={ item } key={ index } />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ) } />
                <Route path={ `${path}/courseBeforehand` } component={ CourseBeforehand } />
            </Switch>
        );
    }
}