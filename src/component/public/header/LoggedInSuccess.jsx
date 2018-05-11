
//公共头 =》 登录成功后
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class LoggedInSuccess extends Component {
    removeItem = () => {
        sessionStorage.removeItem("access_token");
        setTimeout(() => {
            this.props.history.push('/')
        }, 100);
    }
    render() {
        const imgPrefix = sessionStorage.getItem("imgPrefix");
        const headUrl = sessionStorage.getItem("headUrl");
        return (
            <div className="sign-in-success">
                <Link to="/personData/personInfo">
                    { headUrl ? <img src={ imgPrefix + headUrl } alt=""/> : <i className="ion-person" /> }
                </Link>
                <i className="ion-arrow-down-b"></i>
                <ul>
                    <li><Link to="/personData/personInfo">个人中心</Link></li>
                    <li><Link to="/personData/collection">我的收藏</Link></li>
                    <li><Link to="/personData/study">我的学习</Link></li>
                    <li><Link to="/personData/setUp">设置</Link></li>
                    <li onClick={ this.removeItem }>退出</li>
                </ul>
            </div>
        );
    }
}


export default withRouter(LoggedInSuccess);
