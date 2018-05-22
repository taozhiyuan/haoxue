
// 课程详情
import React, { Component } from 'react';
import Path from '../../component/public/Path.jsx';
import CourseMain from '../../component/course/CourseMain.jsx';
import AgencyInfo from '../../component/course/AgencyInfo.jsx';
import Lecturer from '../../component/course/Lecturer.jsx';
import Evaluate from '../../component/course/Evaluate.jsx';
import ItemMin from '../../component/course/ItemMin.jsx';
import CourseBeforehand from './CourseBeforehand.jsx';
import './CourseDetails.css';

import { Switch, Route } from "react-router-dom";
import Axios from '../../global/axios.js';
import { getUrlParam } from '../../global/getUrlParam.js';
import { inject, observer } from 'mobx-react';
@inject('Interactive')

@observer
export default class CourseDetails extends Component {
    constructor(props){
        super(props)
        this.interactive = this.props.Interactive;
        this.state = {
            detailsData : null,
            teacherList : null,
            SimilarCourses : []
        }
    }
    request = (params) => {
        this.interactive.switch()
        Promise.all([
            Axios.courseDetails({
                ip : window.returnCitySN["cip"],
                id : params,
            }),
            Axios.courseTeacherList({ courseId : params }),
            Axios.SimilarCourses({ courseId : params })
        ]).then(([ d,t,s ])=>{
            this.setState({
                detailsData : d.data.result,
                teacherList : t.data.result,
                SimilarCourses : s.data.result
            })
            setTimeout(()=>{
                this.interactive.switch()
            },500)
        })
    }
    componentWillMount(){
        this.request(getUrlParam(this.props.location).id)
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps')
        this.request(getUrlParam(nextProps.location).id)
    }
    render() {
        console.log('render')
        const { path } = this.props.match;
        const { search } = this.props.location;
        const { detailsData, teacherList, SimilarCourses } = this.state;
        if(!detailsData){ return false }
        return (
            <Switch>
                <Route exact path={ path } render={ ({ match })=>(
                    <div className="course-details">
                        <div className="main-public">
                            <Path />
                            <CourseMain 
                                url={ match.url } 
                                data={ detailsData } 
                                search={ search }
                                location={ this.props.location }
                            />
                            <AgencyInfo data={ detailsData } />
                            <Lecturer data={ teacherList }/>
                            <Evaluate data={ detailsData }/>
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