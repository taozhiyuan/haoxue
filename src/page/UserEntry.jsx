
// 用户入口
import React, { Component } from 'react';
import SignIn from '../component/userEntry/SignIn.jsx';
import SignUp from '../component/userEntry/SignUp.jsx';
import ForgetPassword from '../component/userEntry/ForgetPassword.jsx';

import { Route, Switch } from "react-router-dom";

export default class UserEntry extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div className="user-entry">
                <Route path={ `${ path }/signIn` } component={ SignIn } />
                <Route path={ `${ path }/signUp` } component={ SignUp } />
                <Route path={ `${ path }/forgetPassword` } component={ ForgetPassword } />
            </div>
        );
    }
}
