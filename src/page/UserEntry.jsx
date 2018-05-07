
// 用户入口
import React, { Component } from 'react';
import SignIn from '../component/userEntry/SignIn.jsx';
import SignUp from '../component/userEntry/SignUp.jsx';
import ForgetPassword from '../component/userEntry/ForgetPassword.jsx';

import { Route, Switch } from "react-router-dom";
import { inject, observer } from 'mobx-react';
@inject('pendingRequests',"touxiang")

@observer
export default class UserEntry extends Component {
    render() {
        console.log(this.props.touxiang)
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
