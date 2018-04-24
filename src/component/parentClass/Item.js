import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Item.css";

export default class Item extends Component {
    render(){
        const data = this.props.data;
        const imgPrefix = "http://hxj-oss-bucket.oss-cn-shenzhen.aliyuncs.com/";
        return (
            <li className="course-item">
                <Link to={ this.props.to }>
                    <section>
                        <span>{ data.browsing }</span>
                        <img src={ imgPrefix + data.photoOsskey } alt=""/>
                    </section>
                    <aside>
                        <h5><b>{ data.courseName }</b></h5>
                        <h5>价格：<b>￥{ data.coursePrice }</b></h5>
                        <h4>{ data.orgName }</h4>
                    </aside>
                </Link>
            </li>
        );
    }
}