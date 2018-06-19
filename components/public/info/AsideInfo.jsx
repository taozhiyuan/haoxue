import React, { Component } from 'react';
import Title from '../Title.jsx';
import Link from 'next/link';
import { imgPath } from '../../../global/axios';

export default class AsideInfo extends Component {
    render(){
        const { data, title } = this.props;
        return(
            <aside>
                <Title name={ title } />
                <ul>
                    { data.map((item, index)=>(
                        <li key={ index }>
                            <div className="default"><img src={ imgPath + item.articleFile } alt="" /></div>
                            <div className="info-industry">
                                <h4><Link href={{ 
                                        pathname : "/infoDetails",
                                        query : { id : item.id }
                                    }}>
                                    <a>{ item.articleTitle }</a></Link>
                                </h4>
                                <time>{ item.createTime }</time>
                            </div>
                        </li>
                    )) }
                </ul>
                <style jsx>{`
                    aside {
                        width : 280px;
                        padding : 10px;
                        background : #FFF;
                        border-radius : 5px;
                        display: inline-block;
                        vertical-align: top;
                    }
                        ul {
                            padding : 9px 10px;
                        }
                            ul > li:not(:last-child){
                                border-bottom : 1px dashed #eee;
                            }
                            ul > li {
                                padding : 12px 0px;
                                position : relative;
                            }
                                li > div:first-child {
                                    position : absolute;
                                    top : 10px;
                                    left : 0px;
                                    width : 85px;
                                    height : 68px;
                                }
                                div.info-industry {
                                    height : 68px;
                                    margin-left : 95px;
                                }
                                    div.info-industry > h4 {
                                        color : #666;
                                        font-size : 16px;
                                        height : 44px;
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
            </aside>
        )
    }
}
