
// 用户登录
import React, { Component } from 'react';
import './UserEntry.css';
import { Link } from "react-router-dom";

export default class SignIn extends Component {
    render() {
        return (
            <div className="sign-in">
                <h3>用户登录</h3>
                <h5 className="user-name">
                    <i className="ion-android-person"></i>
                    <input type="text" placeholder="请输入您的昵称或手机号" />
                </h5>
                <h5 className="password">
                    <i className="ion-ios-locked-outline"></i>
                    <input type="password" placeholder="请输入您的密码" />
                </h5>
                <h5 className="graphical">
                    <input type="text" placeholder="输入验证码" />
                    <span></span>
                    <a href="//">看不清 ？换一张</a>
                </h5>
                <Link to="/personData/personInfo"><button>登&emsp;录</button></Link>
                <footer>
                    <Link to="/userEntry/forgetPassword">忘记密码</Link>
                    <Link to="/userEntry/signUp">立即注册</Link>
                </footer>
            </div>
        );
    }
}
