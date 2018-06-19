import React, { Component } from 'react'
import Link from 'next/link';

export default class InfoItem extends Component {
    render(){
        return(
            <li>
                <div><img src="/static/img/home/Course.png" alt=""/></div>
                <div className="info-child">
                    <h3 className="ellipsis">成功早教的几个关键期 你造吗</h3>
                    <h5>
                        今天的父母和孩子都生活在一个强调竞争的社会，“不能输在起跑线上”的想法非常有市场。于是，开发的孩子智力成为父母非常重视的事情，简直不惜时间和金钱。但是，各种学习班、兴趣班..
                        <Link href="/"><a>[阅读全文]</a></Link>
                    </h5>
                    <h6>
                        <span>文章来源：腾讯新闻网</span>
                        <span>作者：腾讯新闻网</span>
                        <span>发布时间：2018-06-06 00:16:01</span>
                    </h6>
                </div>
                <style jsx>{`
                    li {
                        padding : 20px 0px;
                        position : relative;
                    }
                        li > div:first-child {
                            position : absolute;
                            top : 20px;
                            left : 0px;
                            width : 150px;
                            height : 120px;
                            background : red;
                        }
                        div.info-child {
                            height : 120px;
                            margin-left : 170px;
                        }
                            div.info-child > h3 {
                                font-size : 20px;
                                line-height : 40px;
                            }
                            div.info-child > h5 {
                                font-size : 14px;
                                overflow : hidden;
                                line-height : 20px;
                                height : 40px;
                                color : #666;
                                margin: 5px 0px;
                                position : relative;
                            }
                                div.info-child > h5 > a {
                                    color : #f5a00a;
                                    display: block;
                                    position : absolute;
                                    bottom : 0px;
                                    right : 0px;
                                    line-height: 20px;
                                    padding : 0px 20px;
                                    background-color : #FFF;
                                }
                            div.info-child > h6 {
                                font-size : 12px;
                                line-height : 25px;
                                color : #999;
                            }
                                div.info-child > h6 > span {
                                    display: inline-block;
                                    width : 33%;
                                }
                                div.info-child > h6 > span:last-child {
                                    text-align : right;
                                }
                `}</style>
            </li>
        )
    }
}
