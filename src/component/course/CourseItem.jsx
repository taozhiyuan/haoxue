
// 搜索 - 课程列表
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './CourseItem.css';

export default class CourseItem extends Component {
    imgPrefix = sessionStorage.getItem("imgPrefix");
    render(){
        const { data, url } = this.props;
        if(!data){ return false }
        return (
            <li className="course-item">
                <Link to={{
                    pathname: `${ url }/course`,
                    search: `id=${ data.id }`,
                }}>
                    <div className="imgPlaceholder">
                        <span>{ data.browsing }</span>
                        <img src={ this.imgPrefix + data.photoOsskey } alt=""/>
                    </div>
                    <aside>
                        <h4><b>{ data.courseName }</b></h4>
                        {/* <h5>价格：<b>￥{ data.coursePrice }</b></h5> */}
                        <h5>{ data.orgName }</h5>
                    </aside>
                </Link>
            </li>
        );
    }
}