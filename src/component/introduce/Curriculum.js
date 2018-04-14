
//机构介绍 》课程列表
import React, { Component } from 'react';
import './Curriculum.css';
import ItemMin from '../parentClass/ItemMin.js';

import { Link } from "react-router-dom";

export default class Curriculum extends Component {
    render() {
        const { url, data } = this.props;
        return (
            <div className="curriculum">
                <h5 className="item-title">课程
                    <Link to={ `${url}/courseList` } className="ion-more"></Link>
                </h5>
                <ul className="curriculum-list">
                    { data.map((item,index)=>(
                        <ItemMin data={ item } key={ index } to={ `${url}/course` }/>
                    )) }
                </ul>
            </div>
        );
    }
}