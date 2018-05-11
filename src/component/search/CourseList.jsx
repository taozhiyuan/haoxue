
// 搜索 - 课程列表
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CourseItem from '../public/CourseItem.jsx';

export default class CourseList extends Component {
    render(){
        const { data } = this.props;
        const imgPrefix = sessionStorage.getItem("imgPrefix");
        if(!data){ return false }
        return (
            <ul className="agency-course-list">
                { data.map((item, index)=>(
                    <CourseItem 
                        to={ item.courseType === "child" ? "/childClassList" : "/parentClassList" }
                        data={ item }
                        key={ index }
                    />
                )) }
            </ul>
        );
    }
}