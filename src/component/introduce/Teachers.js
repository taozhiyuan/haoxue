
// 教培机构师资
import React, { Component } from 'react';
import './Teachers.css';
import TeacherItem from './TeacherItem.js';

import { Link } from "react-router-dom";

export default class Teachers extends Component {
    render() {
        const { data, url } = this.props;
        // console.log(data)
        return (
            <div className="mechanism-teachers">
                <h5 className="item-title">师资
                    <Link to={ `${url}/teacherList` } className="ion-more"></Link>
                </h5>
                <ul className="mechanism-teachers-list">
                { data.map((item,index)=>(
                    <TeacherItem key={ index } url={ this.props.url } data={ item } />
                )) }
                </ul>
            </div>
        );
    }
}