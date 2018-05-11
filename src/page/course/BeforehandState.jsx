
// 课程预约
import React, { Component } from 'react';
import Path from '../../component/public/Path.jsx';
import "./BeforehandState.css";
import { Link } from "react-router-dom";

export default class BeforehandState extends Component {
    constructor(){
        super()
        this.state = {
            res : true
        }
    }
    render() {
        // console.log(this.props.location.state)
        const { state } = this.props.location;
        if(!state){ return false }
        return (
            <section className="beforehand-state-wrap">
                <div className="main-public">
                    <Path />
                    <div className="beforehand-success">
                        <header><i className="ion-ios-checkmark-outline"></i>预约成功</header>
                        <h1>您已预约<span>{ state.orgName }</span>试听课&ensp;<span>{ state.courseName }</span></h1>
                        <h3>稍后会有工作人员联系到您的具体上课时间，请保持手机号码畅通。</h3>
                        <Link to="/personData/collection">查看我的课程</Link>
                    </div>
                </div>
            </section>
        );
    }
}