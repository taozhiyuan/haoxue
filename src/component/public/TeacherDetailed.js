// 机构详情
import React, { Component } from 'react';
import Path from '../agency/Path.js';
import Axios from '../../request/axiosHome.js';
import CourseBeforehand from './CourseBeforehand.js';
import './TeacherDetailed.css';

import { Switch, Route, Link } from "react-router-dom";

export default class TeacherDetailed extends Component {
    constructor(){
        super()
        this.state = {
            data : null
        }
    }
    componentWillMount(){
        console.log(this.props.location)
        Axios.TeacherDetailed({
            teacherId : this.props.location.state.teacherId,
            orgId : this.props.location.state.orgId,
        }).then((res)=>{
            // console.log(res)
            this.setState({
                data : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        const data = this.state.data;
        const { url, path } = this.props.match;
        if(!data) return false;
        console.log(data)
        return (
            <Switch>
                <Route path={ `${path}/courseBeforehand` } component={ CourseBeforehand } />
                <Route path={ path } render={ (match)=>(
                    <div className="teacher-detailed">
                        <div className="main-public">
                            <Path />
                            <ul className="teacher-text">
                                <li><img src={ data.photoOssKey } /></li>
                                <li>
                                    <h1>{ data.teacherName }</h1>
                                    <h4>年级：{ data.teacherGrade }</h4>
                                    <h4>学科：{ data.teacherSubject }</h4>
                                    <h5>{ data.teacherInfo }</h5>
                                </li>
                            </ul>
                            <div className="teacher-info">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>课程名称</th>
                                            <th>上课教师及地点</th>
                                            <th>开课日期及时间</th>
                                            <th>费用</th>
                                        </tr>
                                        <tr>
                                            <td>{ data.courseName }</td>
                                            <td><i></i>{ data.teacherName }</td>
                                            <td>{ data.courseClassTime }</td>
                                            <td>{ data.coursePrice }</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to={ `${url}/courseBeforehand` }><button>立即预约</button></Link>
                            </div>
                        </div>
                    </div>
                ) } />
            </Switch>
        );
    }
}