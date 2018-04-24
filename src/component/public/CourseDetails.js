
// 课程详情
import React, { Component } from 'react';
import Path from '../agency/Path.js';
import CourseMain from '../ChildClass/CourseMain.js';
import Teachers from '../ChildClass/Teachers.js';
import Lecturer from '../ChildClass/Lecturer.js';
import Evaluate from '../ChildClass/Evaluate.js';
import CourseBeforehand from './CourseBeforehand.js';
import ItemMin from '../parentClass/ItemMin.js';
import './CourseDetails.css';

import { Switch, Route } from "react-router-dom";
import Axios from '../../request/axiosHome.js';
import PropTypes from'prop-types';

export default class CourseDetails extends Component {
    constructor(){
        super()
        this.state = {
            data : [],
            teacherList : []
        }
    }
    componentWillMount(){
        Axios.courseDetails({
            ip : '192.168.1.168',
            id : '1',
            userId : '009'
        }).then((res)=>{
            // console.log(res.data.result)
            this.setState({
                data : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        });

        Axios.courseTeacherList({
            courseId : '1'
        }).then((res)=>{
            // console.log(res.data.result)
            this.setState({
                teacherList : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        });
    }
    render() {
        // console.log(this.props.match)
        console.log(this.state.data)
        const { path } = this.props.match;
        const { data, teacherList } = this.state;
        return (
            <Switch>
                <Route exact path={ path } render={ ({ match })=>(
                    <div className="course-details">
                        <div className="main-public">
                            <Path />
                            <CourseMain url={ match.url } data={ data } />
                            <Teachers data={ data.richTextKey } />
                            <Lecturer data={ teacherList }/>
                            <Evaluate data={ data.courseBewrite }/>
                            <div className="course-dide-bar">
                                <h5>类似课程推荐</h5>
                                <ul>
                                    {/* {data.map((item,index)=>(
                                        <ItemMin data={ item } key={ index } to={ match.url }/>
                                    ))} */}
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

// CourseDetails.contextTypes = {
//     AgencyList : PropTypes.array,
// };