
// 课程预约
import React, { Component } from 'react';
import Path from '../agency/Path.js';
import "./BeforehandState.css";

import Axios from '../../request/axiosHome.js';

export default class BeforehandState extends Component {
    constructor(){
        super()
        this.state = {
            res : true
        }
    }
    render() {
        // console.log(this.props)
        return (
            <section className="beforehand-state-wrap">
                <div className="main-public">
                    <Path />
                    <div className="beforehand-success">
                        <header><i className="ion-ios-checkmark-outline"></i>预约成功</header>
                        <h1>您已预约<span>高思教育</span>试听课&ensp;<span>SSAT1v1课程_SSAT一对一辅导辅导</span></h1>
                        <h3>稍后会有工作人员联系到您的具体上课时间，请保持手机号码畅通。</h3>
                        <span>查看我的课程</span>
                    </div>
                </div>
            </section>
        );
    }
}