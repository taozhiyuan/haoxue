
// 用户登录
import React, { Component } from 'react';
import Password from './input/Password.jsx';
import SignInName from './input/SignInName.jsx';
import Verification from './input/Graphic_Verification.jsx';
import Popup from '../public/Popup.jsx';
import './UserEntry.css';

import { Route, Switch, Link, Redirect } from "react-router-dom";

import Axios, { ImportToken } from '../../request/axiosHome.js';

export default class SignIn extends Component {
    constructor(){
        super()
        this.state = {
            data : {
                nickname : null,
                verific : null,
                password : null,
            },
            submit: false,
            popup : false
        }
    }
    getData = (param) => {
        // console.log(param)
        this.setState({
            data : { ...this.state.data, ...param }
        },()=>{
            const { verific, password, nickname } = this.state.data;
            if(nickname && verific && password){
                this.setState({
                    submit : true
                })
                console.log('可以登录了')
            }
        })
    }
    storage = () => {
        Axios.SignIn({
            username : this.state.data.nickname,
            password : this.state.data.password,
            imageCode : this.state.data.verific,
            deviceId : window.returnCitySN["cip"]
        }).then((res)=>{
            console.log(res)
            if(res.data.access_token){
                console.log("存入sessionStorage")
                sessionStorage.setItem("access_token", res.data.access_token);
                this.props.history.push('/personData/personInfo');
                ImportToken(res.data.access_token)
            }else{
                this.setState({
                    popup : true,
                    popupText : res.data
                })
                setTimeout(() => {
                    this.setState({ popup : false })
                }, 1000);
            }
        })
    }
    render() {
        const { path, url } = this.props.match;
        return (
            <div className="sign-in">
                <h3>用户登录</h3>
                <SignInName callback={ this.getData } />
                <Password callback={ this.getData } place="请输入您的密码" />
                <Verification callback={ this.getData } tel={ this.state.data.tel }/>
                { this.state.submit ? 
                    <button onClick = { this.storage }>登&emsp;录</button>:
                    <button className="disable">登&emsp;录</button>
                }
                <footer>
                    <Link to="/userEntry/forgetPassword">忘记密码</Link>
                    <Link to="/userEntry/signUp">立即注册</Link>
                </footer>
                { this.state.popup && <Popup state={false}>{ this.state.popupText }</Popup> }
            </div>
        );
    }
}
