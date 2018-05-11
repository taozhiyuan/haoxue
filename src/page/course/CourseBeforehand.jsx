
// 课程预约
import React, { Component } from 'react';
import Path from '../../component/public/Path.jsx';
import BeforehandState from './BeforehandState.jsx';
import "./CourseBeforehand.css";
import Popup from '../../component/public/Popup.jsx';

import Axios from '../../global/axios.js';
import { getUrlParam } from '../../global/getUrlParam.js';
import { Switch, Route } from "react-router-dom";

export default class CourseBeforehand extends Component {
    constructor(){
        super()
        this.imgPrefix = sessionStorage.getItem("imgPrefix")
        this.state = {
            data : null,
            name : "",
            tel : "",
            QQ : "",
            email : "",
            number : 1,
            imgPrefix : sessionStorage.getItem("imgPrefix"),
            token : sessionStorage.getItem("access_token"),
            popup : false,
            popupText : null,
            submitState : false
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
        const { name, tel, QQ, email } = this.state;
        this.setState({
            [parame] : event.target.value
        },()=>{
            if( name&&tel&&QQ&&email ){
                this.setState({ submitState : true })
            }
        })
    }
    SubmitReservation = () => {
        // const { pathname, search } = this.props.location;
        // const { name, tel, QQ, email, token, number, data } = this.state;
        // this.props.history.push(`${pathname}/success${search}`,{
        //     orgName: data.orgName,
        //     courseName : data.courseName
        // });
        const { name, tel, QQ, email, token, number, data } = this.state;
        const { pathname, search } = this.props.location;
        if(!token){
            console.log("请登录")
            this.setState({ popup : true, popupText : "请先登录" },()=>{
                setTimeout(() => {
                    this.setState({ popup : false, popupText : "请登录" })
                }, 1000);
            })
            return false;
        }
        if( name&&tel&&QQ&&email ){
            Axios.ReservationInfo({
                access_token : token,
                form : {
                    reservePerson : number,
                    courseId : data.id,
                    userName : name,
                    reservePhone : tel,
                    qq : QQ,
                    email : email,
                    orgId : data.orgId
                }
            }).then((res)=>{
                console.log(res)
                if(res.data.code === "0"){
                    this.props.history.push(`${pathname}/success${search}`,{
                        orgName: data.orgName,
                        courseName : data.courseName
                    });
                }else{
                    this.setState({
                        popup : true,
                        popupText : res.data.msg,
                    },()=>{
                        setTimeout(()=>{
                            this.setState({ popup : false })
                        },1000)
                    })
                }
            })
        }
    }
    render() {
        // console.log(this.props.location)
        const { path } = this.props.match;
        const { name, tel, QQ, email, number, data, imgPrefix, popup, submitState, popupText } = this.state;
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
                { item.name }
                <input 
                    type={ item.type } 
                    placeholder={ item.placeholder } 
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
                                    <div className="imgPlaceholder">
                                        <img src={ imgPrefix + data.photoOsskey } alt="" />
                                    </div>
                                    <h4>{ data.orgName }</h4>
                                    <h5>课程简介：</h5>
                                    <article dangerouslySetInnerHTML={{ __html: data.courseBewrite }}></article>
                                    {/* <iframe 
                                        frameBorder="0"
                                        scrolling="yes"
                                        seamless
                                        width="100%"
                                        height="100%"
                                        title="Evaluate-iframe"
                                        src ={ this.imgPrefix + data.richTextCourseKey }>
                                    </iframe> */}
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
                                            <span className="beforehand-course-people">
                                                <i className="ion-minus"
                                                    onClick={ this.reduce }
                                                ></i>
                                                <input type="number" 
                                                    value={ number }
                                                    onChange={ this.changeNumber }
                                                />
                                                <i className="ion-plus"
                                                    onClick={ this.increase }
                                                ></i>
                                                <span>人</span>
                                            </span>
                                        </h5>
                                    </div>
                                    <div className="beforehand-user-info">
                                        <p className="title">课程预定人信息</p>
                                        { userDOM }
                                        <button className={ submitState?null:"disable" } onClick={ this.SubmitReservation }>马上预约</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        { popup && <Popup state={false}>{ popupText }</Popup> }
                    </section>
                ) } />
            </Switch>
        );
    }
}