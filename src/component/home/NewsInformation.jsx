
// 首页 ==》 资讯干货 ==> 子项
import React, { Component } from 'react';
import './NewsInformation.css';
import information_main from './img/information_main.png';
import { Link } from "react-router-dom";

export default class NewsInformation extends Component {
    constructor(props){
        super(props)
        this.imgPrefix = sessionStorage.getItem("imgPrefix");
    }
    render() {
        const top = this.props.data.slice(0,2);
        const bottom = this.props.data.slice(2);
        return (
            <div className="home-information-column">
                <div className="title">
                    <h5>{ this.props.title.name }</h5>
                    <Link to={ this.props.title.more }>更多<i className="ion-chevron-right"></i></Link>
                </div>
                <ul className="home-information-main">
                    { top.map((item, index)=>(
                        <li key={ index }>
                            <Link to={{ 
                                pathname : '/information/details',
                                search : `id=${ item.id }`
                            }}>
                                <div className="imgPlaceholder"><img src={ this.imgPrefix + item.articleFile } alt=""/></div>
                                <h6>{ item.articleTitle }</h6>
                                <h6>发布时间：<time>{ item.createTime }</time></h6>
                            </Link>
                        </li>
                    )) }
                </ul>
                <ul className="home-information-list">
                    { bottom.map((item,index)=>(
                        <li key={ index }>
                            <Link to={{ 
                                pathname : '/information/details',
                                search : `id=${ item.id }`
                            }}>
                                <h6>{ item.articleTitle }</h6>
                                <span>发布时间：2018-02-10</span>
                            </Link>
                        </li>
                    )) }
                </ul>
            </div>
        );
    }
}
