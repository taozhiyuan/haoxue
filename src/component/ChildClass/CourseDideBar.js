
// 课程详情 侧边栏
import React, { Component } from 'react';
import "./CourseDideBar.css";
import ItemMin from '../parentClass/ItemMin.js';

export default class CourseDideBar extends Component {
    render(){
        console.log(this.props)
        return (
            <div className="course-dide-bar">
                <h5>类似机构</h5>
                <ul>
                    {this.props.data.map((item,index)=>(
                        <ItemMin data={ item } key={ index } to={ this.props.url }/>
                    ))}
                </ul>
            </div>
        );
    }
}