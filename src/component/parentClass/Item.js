import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Item.css";

export default class Item extends Component {
    render(){
        const data = this.props.data;
        const imgPrefix = sessionStorage.getItem("imgPrefix");
        return (
            <li className="course-item">
                <Link to={{
                    pathname: this.props.to,
                    search: `id=${ data.id }`,
                }}>
                    <div className="imgPlaceholder">
                        <span>{ data.browsing }</span>
                        <img src={ imgPrefix + data.photoOsskey } alt=""/>
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