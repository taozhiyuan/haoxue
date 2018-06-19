import React, { Component } from 'react';
import Link from 'next/link';

export default class NewsItem extends Component {
    render(){
        return(
            <li>
                <div><img src="/static/img/home/Course.png" alt=""/></div>
                <div className="info-industry">
                    <h4><Link href="/"><a>成功早教的几个关键期 你造吗</a></Link></h4>
                    <time>2018-06-06 00:16:01</time>
                </div>
                <style jsx>{`
                    li {
                        padding : 10px 0px;
                        position : relative;
                    }
                        li > div:first-child {
                            position : absolute;
                            top : 10px;
                            left : 0px;
                            width : 85px;
                            height : 68px;
                            background : red;
                        }
                        div.info-industry {
                            height : 68px;
                            margin-left : 95px;
                        }
                            div.info-industry > h4 {
                                color : #666;
                                font-size : 16px;
                                line-height : 22px;
                                overflow : hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                            }
                            div.info-industry > time {
                                font-size : 12px;
                                color : #999;
                                line-height: 25px;
                            }
                `}</style>
            </li>
        )
    }
}
