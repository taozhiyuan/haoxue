import React, { Component } from 'react'
import Link from 'next/link';
import Title from '../Title.jsx';
import { imgPath } from '../../../global/axios';

export default class Child extends Component {
    render(){
        const { data, name, url } = this.props;
        return(
            <article>
                <Title name={ name } url={ url } />
                <ul>
                    { data.map((item, index)=>(
                        <li key={ index }>
                            <div className="default"><img src={ imgPath + item.articleFile } alt=""/></div>
                            <div className="info-child">
                                <h3 className="ellipsis">{ item.articleTitle }</h3>
                                <h5>
                                    { item.articleContent }
                                    <Link href={{ 
                                        pathname : "/infoDetails",
                                        query : { id : item.id }
                                    }}
                                    ><a>[阅读全文]</a></Link>
                                </h5>
                                <h6>
                                    <span>文章来源：{ item.articleSource }</span>
                                    <span>作者：{ item.articleAuthor }</span>
                                    <span>发布时间：{ item.createTime }</span>
                                </h6>
                            </div>
                        </li>
                    )) }
                </ul>
                <style jsx>{`
                    article {
                        width : 900px;
                        padding : 10px;
                        background : #FFF;
                        border-radius : 5px;
                        display: inline-block;
                        margin-right : 20px;
                    }
                        ul {
                            padding : 0px 20px;
                        }
                            ul > li:not(:last-child){
                                border-bottom : 1px dashed #eee;
                            }
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
            </article>
        )
    }
}
