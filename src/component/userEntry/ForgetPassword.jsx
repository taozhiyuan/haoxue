
// 忘记密码
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class ForgetPassword extends Component {
    render() {
        return (
            <div className="forget-password">
                <h3>找回密码</h3>
                <h5 className="user-name">
                    <i className="ion-iphone"></i>
                    <input type="number" placeholder="输入11位手机号" />
                </h5>
                <h5 className="mobile">
                    <i className="ion-ios-email-outline"></i>
                    <input type="text" placeholder="输入验证码" />
                    <span>发送验证码</span>
                </h5>
                <h5 className="graphical">
                    <input type="text" placeholder="输入验证码" />
                    <span></span>
                    <a href="//">看不清 ？换一张</a>
                </h5>
                <button>完&emsp;成</button>
                <footer>
                    <Link to="/userEntry/signUp">立即注册</Link>
                    <Link to="/userEntry/signIn">立即登录</Link>
                </footer>
            </div>
        );
    }
}
