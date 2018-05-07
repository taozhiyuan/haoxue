import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NotLoggedIn extends Component {
    render() {
        return (
            <div className="index-head-sign">
                <span><Link to="/userEntry/signIn">登录</Link></span>
                <span><Link to="/userEntry/signUp">注册</Link></span>
            </div>
        );
    }
}


export default NotLoggedIn;
