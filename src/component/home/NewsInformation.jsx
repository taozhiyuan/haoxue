
// 首页 ==》 资讯干货 ==> 子项
import React, { Component } from 'react';
import './NewsInformation.css';
import information_main from './img/information_main.png';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default class NewsInformation extends Component {
    render() {
        const top = this.props.data.slice(0,2);
        const bottom = this.props.data.slice(2);
        return (
            <div className="home-information-column">
                <div className="title">
                    <h5>女性心理</h5>
                    <Link to="/">更多<i className="ion-chevron-right"></i></Link>
                </div>
                <ul className="home-information-main">
                    { top.map((item,index)=>(
                        <li key={ index }>
                            <img src={ information_main } alt=""/>
                            <h6>{ item.articleTitle }</h6>
                            <h6>发布时间：<time>{ item.createTime }</time></h6>
                        </li>
                    )) }
                </ul>
                <ul className="home-information-list">
                    { bottom.map((item,index)=>(
                        <li key={ index }>
                            <h6>{ item.articleTitle }</h6>
                            <span>发布时间：2018-02-10</span>
                        </li>
                    )) }
                </ul>
            </div>
        );
    }
}

NewsInformation.contextTypes = {
    imgPrefix : PropTypes.string,
};
