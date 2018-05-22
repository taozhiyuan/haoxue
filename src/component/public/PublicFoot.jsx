import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.png';
import './PublicFoot.css';

export default class PublicFoot extends Component {
    render() {
        return (
            <footer className="index-public-foot">
                <div className="main-public">
                    <ul className="public-foot-list">
                        <li>
                            <dl>
                                <dt>亲子课堂</dt>
                                <dd>子女课堂</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>最新资讯</dt>
                                <dd>干货文章</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>合作与服务</dt>
                                <dd>关于我们</dd>
                                <dd>广告与服务</dd>
                                <dd>联系我们</dd>
                                <dd>加入我们</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>帮助中心</dt>
                                <dd>意见反馈</dd>
                                <dd>常见问题</dd>
                            </dl>
                        </li>
                    </ul>
                    <div className="public-foot-prompt">
                        <img src={ require('../../img/WechatIMG29.jpeg') } alt=""/>
                        <img src={ require('../../img/WechatIMG30.jpeg') } alt=""/>
                    </div>
                    <p>版权所有：湖南省长沙市好学家有限公司 </p>
                    <p>服务热线：0734-09876654　　公司地址：湖南省长沙市某某区某某街道某某大厦2018房　　邮箱：email@email.com</p>
                    <p>Copyright (C) 2018  www.www.cn  证书编码：湘ICP备00000000号-1</p>
                </div>
            </footer>
        );
    }
}

