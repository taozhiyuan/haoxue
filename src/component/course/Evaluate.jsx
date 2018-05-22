
// 课程简介
import React, { Component } from 'react';
import "./Evaluate.css"
import Title from "./Title.jsx";
import Axios from '@/global/axios.js';

export default class Evaluate extends Component {
    constructor(){
        super()
        this.state = {
            getStringByKey : null
        }
    }
    componentWillMount(){
        Axios.getStringByKey({ key : this.props.data.richTextCourseKey }).then((res) => {
            this.setState({
                getStringByKey : res.data.result,
            })
        });
    }
    render(){
        const { data } = this.props;
        const { getStringByKey } = this.state;
        return (
            <div className="course-details-evaluate">
                <Title>课程简介</Title>
                <div>
                    { getStringByKey ? 
                        <div dangerouslySetInnerHTML={{ __html: getStringByKey }}></div> : 
                        <h6>暂无内容</h6> }
                </div>
            </div>
        );
    }
}