
// 课程简介
import React, { Component } from 'react';
import "./Evaluate.css"
import Title from "./Title.jsx";

export default class Evaluate extends Component {
    render(){
        const { data } = this.props;
        if(!data){ return false }
        return (
            <div className="course-details-evaluate">
                <Title>课程简介</Title>
                <div>
                    { data.courseBewrite ? 
                        <div dangerouslySetInnerHTML={{ __html: data.courseBewrite }}></div> : 
                        <h6>暂无内容</h6> }
                </div>
            </div>
        );
    }
}