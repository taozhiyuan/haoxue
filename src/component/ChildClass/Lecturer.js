
// 课程详情 ==》 讲师
import React, { Component } from 'react';
import "./Lecturer.css"
import Title from "./Title.js";
import PropTypes from 'prop-types';

export default class Lecturer extends Component {
    constructor(){
        super()
        this.state = {
            imgPrefix : sessionStorage.getItem("imgPrefix")
        }
    }
    render(){
        // console.log(this.props.data[0])
        const data  = this.props.data || [];
        return (
            <div className="lecturer">
                <Title>讲师</Title>
                { data.map((item, index)=>(
                    <ul className="lecturer-cont" key={ index }>
                        <li key={ index }>
                            <h4>{ item.teacherName }</h4>
                            <h6>{ item.teacherInfo }</h6>
                            <h4>教师风采</h4>
                            <h6>{ item.teacherStyle }</h6>
                        </li>
                        <li>
                            <div className="imgPlaceholder">
                                <img src={ this.state.imgPrefix + item.photoOsskey } alt=""/>
                            </div>
                        </li>
                    </ul>
                )) }
            </div>
        );
    }
}

Lecturer.contextTypes = {
    imgPrefix : PropTypes.string,
};