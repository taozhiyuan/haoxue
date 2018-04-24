
// 我的收藏
import React, { Component } from 'react';
import my_collection from './img/my_collection.png';
import './Collection.css';

import Axios from '../../request/axiosHome.js';
import { Link } from "react-router-dom";

export default class Collection extends Component {
    constructor(){
        super()
        this.state = {
            type : ['课程','教育机构'],
            typeActive : 0
        }
    }
    componentWillMount(){
        
    }
    typeClick = (parame) => {
        this.setState({
            typeActive : parame
        })
    }
    render() {
        // const { path } = this.props.match;
        const { type, typeActive } = this.state;
        return (
            <div className="my-collection">
                <ul className="my-collection-type">
                    { this.state.type.map((item,index)=>(
                        <li
                            key={ index }
                            className={ typeActive===index?'active':null }
                            onClick={ ()=>{this.typeClick(index)} }
                        >{ item }</li>
                    )) }
                </ul>
                <ul className="my-collection-list">
                    <li>
                        <div><img src={ my_collection } alt=""/></div>
                        <div className="my-collection-text">
                            <h5>SSAT1v1课程_SSAT一对一辅导辅导</h5>
                            <h3>￥5999元&emsp;&emsp;&emsp;<span>已购：876</span></h3>
                            <h5><i className="iconfont icon-guanzhu"></i>678</h5>
                            <h6>上课地址：岳麓大道</h6>
                            <h6 className="time">上课时间：3月6日-6月19日;每周二下午13:30-15:20</h6>
                            <h6>咨询电话：012345678</h6>
                        </div>
                        <div className="my-collection-inter">
                            <Link to={ this.props.match.url }><button>立即报名</button></Link>
                            <Link to={ this.props.match.url }><button>立即预约</button></Link>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
