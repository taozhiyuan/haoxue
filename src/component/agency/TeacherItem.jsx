
// 教培机构师资
import React, { Component } from 'react';
import './TeacherItem.css';
import { Link } from "react-router-dom";

export default class TeacherItem extends Component {
    imgPrefix = sessionStorage.getItem("imgPrefix");
    render() {
        const data = this.props.data;
        // console.log(data)
        return (
            <li className="teacher-item">
                <Link to={{
                    pathname : `${this.props.url}/teacher`,
                    state : {
                        teacherId : data.teacherId,
                        orgId : data.orgId
                    }
                }} >
                    <div>
                        <img src={ this.imgPrefix + data.photoOsskey } alt=""/>
                        <span>{ data.teacherName }</span>
                    </div>
                    <h5>{ data.teacherInfo }</h5>
                </Link>
            </li>
        );
    }
}