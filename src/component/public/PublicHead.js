import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import logo from '../../img/logo.png';
import Container from './ChoiceCity/Container.js';
import './PublicHead.css';

export default class PublicHead extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuActive : 0,
            menuPara : [
                { text : "首   页", path : "/", to : "/" },
                { text : "教培机构", path : "/agencyList/:bar*", to : "/agencyList" },
                { text : "父母课堂", path : "/parentClassList/:bar*", to : "/parentClassList" },
                { text : "亲子课堂", path : "/childClassList/:bar*", to : "/childClassList" },
                { text : "好学分期", path : "/byStages/:bar*", to : "/byStages" },
                { text : "关于我们", path : "/aboutUs/:bar*", to : "/aboutUs" }
            ],
            cityVisibi : false
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
        return (
            <header className="index-public-head">
                <div className="main-public">
                    <img src={ logo } alt="logo"/>
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
                    <div className="index-head-sign">
                        <span>登录</span>
                        <span>注册</span>
                    </div>
                </div>
            </header>
        );
    }
}

