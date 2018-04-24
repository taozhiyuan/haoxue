
// 用户注册
import React, { Component } from 'react';
import SignUpSuccess from './SignUpSuccess.jsx';
import { Route, Switch, Link } from "react-router-dom";
import './UserEntry.css';

export default class SignUp extends Component {
    render() {
        const { path, url } = this.props.match;
        return (
            <Switch>
                <Route path={ `${ path }/signUpSuccess` } component={ SignUpSuccess } />
                <Route path={ path } render={ ()=>(
                    <div className="sign-up">
                        <h3>用户注册</h3>
                        <h5 className="user-name">
                            <i className="ion-iphone"></i>
                            <input type="number" placeholder="输入11位手机号" />
                        </h5>
                        <h5 className="mobile">
                            <i className="ion-ios-email-outline"></i>
                            <input type="text" placeholder="输入验证码" />
                            <span>发送验证码</span>
                        </h5>
                        <h5 className="nickname">
                            <i className="ion-android-person"></i>
                            <input type="text" placeholder="请输入昵称" />
                        </h5>
                        <h5 className="password">
                            <i className="ion-ios-locked-outline"></i>
                            <input type="password" placeholder="设置6至16位字符的密码" />
                        </h5>
                        <Link to={ `${url}/signUpSuccess` }><button>注&emsp;册</button></Link>
                        <footer>
                            <Link to="/userEntry/forgetPassword">忘记密码</Link>
                            <Link to="/userEntry/signIn">立即登录</Link>
                        </footer>
                    </div>
                ) } />
            </Switch>
        )
    }
}
