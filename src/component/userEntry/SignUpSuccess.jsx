
// 忘记密码
import React, { Component } from 'react';
import './SignUpSuccess.css';
import { Link } from "react-router-dom";

export default class SignUpSuccess extends Component {
    render() {
        return (
            <div className="sign-up-success">
                <h4>
                    <i className="ion-ios-checkmark-outline"></i>
                    注册成功
                </h4>
                <Link to="/userEntry/signIn">返回登录</Link>
            </div>
        );
    }
}
