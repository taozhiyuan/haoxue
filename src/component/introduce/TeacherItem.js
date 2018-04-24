
// 教培机构师资
import React, { Component } from 'react';
import './TeacherItem.css';
import { Link } from "react-router-dom";

export default class TeacherItem extends Component {
    render() {
        const data = this.props.data;
        const imgPrefix = "http://hxj-oss-bucket.oss-cn-shenzhen.aliyuncs.com/";
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
                        <img src={ imgPrefix + data.photoOsskey } alt=""/>
                        <span>{ data.teacherName }</span>
                    </div>
                    <h5>{ data.teacherInfo }</h5>
                </Link>
            </li>
        );
    }
}