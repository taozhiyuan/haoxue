import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import logo from '../../img/logo.png';
import tx from '../../img/tx.png';
import Container from './ChoiceCity/Container.js';
import './PublicHead.css';

export default class PublicHead extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuActive : 0,
            menuPara : [
                { text : "首   页", path : "/", to : "/" },
                // { text : "教培机构", path : "/agencyList/:bar*", to : "/agencyList" },
                { text : "父母课程", path : "/parentClassList/:bar*", to : "/parentClassList" },
                { text : "孩子课程", path : "/childClassList/:bar*", to : "/childClassList" },
                { text : "好学分期", path : "/byStages/:bar*", to : "/byStages" },
                { text : "关于我们", path : "/aboutUs/:bar*", to : "/aboutUs" }
            ],
            cityVisibi : false,
            sessionStorage : false
        }
    };
    changeMenuID = (para) => {
        this.setState({
            menuActive : para
        });
    };
    changeVisibi = () => {
        this.setState({
            cityVisibi : !this.state.cityVisibi
        });
    }
    removeItem = () => {
        sessionStorage.removeItem("access_token");
        this.setState({
            sessionStorage : !this.state.sessionStorage
        })
    }
    render() {
        let menuDom = this.state.menuPara.map(( item, index ) => (
            <Route exact path={ item.path } key={ index }
                children={({ match }) => (
                    <li className={ match ? "active" : "" }>
                        <Link to={ item.to }>{ item.text }</Link>
                    </li>
                )}
            />
        ));
        const token = sessionStorage.getItem("access_token");
        return (
            <header className="index-public-head">
                <div className="main-public">
                    <img className="logo" src={ logo } alt="logo"/>
                    <ul className="index-public-menu">
                        { menuDom }
                    </ul>
                    <div className="index-head-search">
                        <span onClick={ this.changeVisibi }>
                            长沙<i className="ion-arrow-down-b"></i>
                            { this.state.cityVisibi && <Container /> }
                        </span>
                        <input type="text" placeholder="请输入课程/机构名称"/>
                        <i className="ion-ios-search-strong"></i>
                    </div>
                    { token?
                        <div className="sign-in-success">
                            <Link to="/personData/personInfo"><img src={ tx } alt=""/></Link>
                            <i className="ion-arrow-down-b"></i>
                            <ul>
                                <li onClick={ this.removeItem }>退出</li>
                                <li><Link to="/userEntry/signIn">登录</Link></li>
                                <li><Link to="/userEntry/signUp">注册</Link></li>
                            </ul>
                        </div>:
                        <div className="index-head-sign">
                            <span><Link to="/userEntry/signIn">登录</Link></span>
                            <span><Link to="/userEntry/signUp">注册</Link></span>
                        </div>
                    }
                </div>
            </header>
        );
    }
}

