
//机构介绍 》课程列表
import React, { Component } from 'react';
import './Curriculum.css';
import ItemMin from '../parentClass/ItemMin.js';

export default class Curriculum extends Component {
    render() {
        const data = this.props.data;
        const url = "/parentClass/course";
        console.log(data)
        return (
            <div className="curriculum">
                <h4>课程<span>查看全部</span></h4>
                <ul className="curriculum-list">
                    { data.map((item,index)=>(
                        <ItemMin data={ item } key={ index } to={ url }/>
                    )) }
                </ul>
            </div>
        );
    }
}