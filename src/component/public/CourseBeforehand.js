
// 课程预约
import React, { Component } from 'react';
import Path from '../agency/Path.js';
import BeforehandState from './BeforehandState.js';
import "./CourseBeforehand.css";
import Popup from './Popup.jsx';

import Axios from '../../request/axiosHome.js';
import { getUrlParam } from '../../request/getUrlParam.js';
import { Redirect, Switch, Route, Link } from "react-router-dom";

export default class CourseBeforehand extends Component {
    constructor(){
        super()
        this.state = {
            data : null,
            name : "",
            tel : "",
            QQ : "",
            email : "",
            number : 1,
            imgPrefix : sessionStorage.getItem("imgPrefix"),
            popup : false
        }
    }
    componentWillMount(){
        Axios.courseDetails({
            ip : window.returnCitySN["cip"],
            id : getUrlParam(this.props.location).id,
        }).then((res)=>{
            this.setState({
                data : res.data.result
            })
        })
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
    SubmitReservation = () => {
        if(!sessionStorage.getItem("access_token")){
            console.log("请登录")
            this.setState({
                popup : true
            },()=>{
                setTimeout(() => {
                    this.setState({
                        popup : false
                    })
                }, 1000);
            })
            return false;
        }
        const { name, tel, QQ, email } = this.state;
        if( name&&tel&&QQ&&email ){
            Axios.ReservationInfo({
                reservePerson : this.state.number,
                courseId : this.state.data.id,
                userName : this.state.name,
                reservePhone : this.state.tel,
                qq : this.state.QQ,
                email : this.state.email,
                orgId : this.state.data.orgId,
                access_token : sessionStorage.getItem("access_token"),
            }).then((res)=>{
                console.log(res)
            })
        }else{
            console.log('参数不完整')
        }
    }
    render() {
        // console.log(this.props)
        const { url, path } = this.props.match;
        const { name, tel, QQ, email, number, data, imgPrefix, popup } = this.state;
        if(!data){ return false }
        const userInfo = [{
                name : "预定姓名：",
                type : "text",
                placeholder : "预定人姓名",
                value : name,
                state : "name"
            },{
                name : "手机号码：",
                type : "number",
                placeholder : "预定人手机",
                value : tel,
                state : "tel"
            },{
                name : "联系 QQ：",
                type : "number",
                placeholder : "预定人QQ",
                value : QQ,
                state : "QQ"
            },{
                name : "电子邮箱：",
                type : "email",
                placeholder : "预定人邮箱",
                value : email,
                state : "email"
            }];
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
                                    <div><img src={ imgPrefix + data.photoOsskey } /></div>
                                    <h4>{ data.orgName }</h4>
                                    <h5>课程简介：</h5>
                                    <h6>{ data.courseBewrite }</h6>
                                    <h6 className="tel">客服咨询：{ data.coursePhone }</h6>
                                </div>
                                <div className="course-beforehand-detailed">
                                    <div className="beforehand-course-info">
                                        <p className="title">课程信息</p>
                                        <h5>课程名称：<span>{ data.courseName }</span></h5>
                                        <h5>课程类型：<span>{ data.typeName }</span></h5>
                                        <h5>课&emsp;&emsp;时：<span>{ data.courseTime }</span></h5>
                                        <h5>上课地址：<span>{ data.courseAddress }</span></h5>
                                        <h5>上课时间：<span className="time">{ data.courseClassTime }</span></h5>
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
                                        { sessionStorage.getItem("access_token") ? 
                                            <Link to={ `${url}/success` }>
                                                <button onClick={ this.SubmitReservation }>马上预约</button>
                                            </Link> : 
                                            <button className="disable" onClick={ this.SubmitReservation }>马上预约</button> }
                                    </div>
                                </div>
                            </div>
                        </div>
                        { popup ? <Popup state={false}>请先登录</Popup> : null }
                    </section>
                ) } />
            </Switch>
        );
    }
}