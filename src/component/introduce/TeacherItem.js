
// 教培机构师资
import React, { Component } from 'react';
import './TeacherItem.css';
import { Link } from "react-router-dom";

export default class TeacherItem extends Component {
    render() {
        const data = this.props.data;
        // console.log(data)
        return (
            <li className="teacher-item">
                <Link to={ `${this.props.url}/teacher` } >
                    <div><span>{ data.name }</span></div>
                    <h5>{ data.introduce }</h5>
                </Link>
            </li>
        );
    }
}