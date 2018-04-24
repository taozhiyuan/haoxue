
// 课程预约
import React, { Component } from 'react';
import Path from '../agency/Path.js';
import BeforehandState from './BeforehandState.js';
import "./CourseBeforehand.css";

import Axios from '../../request/axiosHome.js';
import { Switch, Route, Link } from "react-router-dom";

export default class CourseBeforehand extends Component {
    constructor(){
        super()
        this.state = {
            data : [],
            name : "",
            tel : "",
            QQ : "",
            email : "",
            number : 1
        }
    }
    increase = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
    reduce = () => {
        if(this.state.number === 1 ) return false;
        this.setState((prevState) => ({
            number: prevState.number - 1
        }));
    }
    changeNumber = (event) => {
        const number = window.parseInt(event.target.value);
        if(!number){
            this.setState({
                number : 1
            })
        }else{
            this.setState({
                number : number
            })
        }
    }
    changeUserValue = (event, parame) => {
        this.setState({
            [parame] : event.target.value
        })
    }
    render() {
        // console.log(this.props)
        const { url, path } = this.props.match;
        const { name, tel, QQ, email, number } = this.state;
        const userInfo = [
            {
                name : "预定姓名：",
                type : "text",
                placeholder : "预定人姓名",
                value : name,
                state : "name"
            },
            {
                name : "手机号码：",
                type : "number",
                placeholder : "预定人手机",
                value : tel,
                state : "tel"
            },
            {
                name : "联系 QQ：",
                type : "number",
                placeholder : "预定人QQ",
                value : QQ,
                state : "QQ"
            },
            {
                name : "电子邮箱：",
                type : "email",
                placeholder : "预定人邮箱",
                value : email,
                state : "email"
            }
        ];
        let userDOM = userInfo.map((item, index)=>(
            <h5 key={ index }>
                {item.name}
                <input 
                    type={ item.type } 
                    placeholder={item.placeholder} 
                    value={ item.value }
                    onChange={ (e)=>{this.changeUserValue(e,item.state)} }
                />
            </h5>
        ))
        return (
            <Switch>
            <Route path={ `${path}/success` } component={ BeforehandState } />
            <Route path={ path } render={ ({match})=>(
                <section className="course-beforehand">
                    <div className="main-public">
                        <Path />
                        <ul className="course-beforehand-state">
                            <li>1. 搜索课程</li>
                            <li className="active">2. 确定预约课程信息</li>
                            <li>3. 预约成功</li>
                        </ul>
                        <div className="course-beforehand-container">
                            <div className="course-beforehand-simple">
                                <div></div>
                                <h4>高思教育</h4>
                                <h5>课程简介：</h5>
                                <h6>针对目标分数7分及7+的雅思考生，按照雅思写作四个评分标准作量化讲解重点句型结构，功能性结构，教你用逻辑思维正确审题，快速完成高分作文。</h6>
                                <h6 className="tel">客服咨询：0123457888</h6>
                            </div>
                            <div className="course-beforehand-detailed">
                                <div className="beforehand-course-info">
                                    <p className="title">课程信息</p>
                                    <h5>课程名称：<span>SSAT1v1课程_SSAT一对一辅导辅导</span></h5>
                                    <h5>课程类型：<span>少儿英语</span></h5>
                                    <h5>课&emsp;&emsp;时：<span>21个课时</span></h5>
                                    <h5>上课地址：<span>岳麓大道</span></h5>
                                    <h5>上课时间：<span className="time">3月6日-6月19日;每周二下午13:30-15:20</span></h5>
                                    <h5>
                                        预定人数：
                                        <i className="beforehand-number ion-minus"
                                            onClick={ this.reduce }
                                        ></i>
                                        <input type="number" 
                                            value={ number }
                                            onChange={ this.changeNumber }
                                        />
                                        <i className="beforehand-number ion-plus"
                                            onClick={ this.increase }
                                        ></i>
                                        <span>人</span>
                                    </h5>
                                </div>
                                <div className="beforehand-user-info">
                                    <p className="title">课程预定人信息</p>
                                    { userDOM }
                                    <Link to={ `${url}/success` }><button>马上预约</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) } />
            </Switch>
        );
    }
}