
// 用户入口
import React, { Component } from 'react';
import SignIn from '../component/userEntry/SignIn.jsx';
import SignUp from '../component/userEntry/SignUp.jsx';
import ForgetPassword from '../component/userEntry/ForgetPassword.jsx';
import './UserEntry.css';

import { Route, Switch } from "react-router-dom";
import { inject, observer } from 'mobx-react';
// @inject('testStore')

@observer
export default class UserEntry extends Component {
    constructor(props) {
        super(props);
        // this.store = this.props.testStore;  //通过props来导入访问已注入的store
        // this.changeValue = this.store.changeValue.bind(this.store)  //访问store中的事件
    }
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
