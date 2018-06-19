import React, { Component } from 'react'
import Link from 'next/link'

export default class Share extends Component {
    state = {
        data : {
            preTitle : "口才比文才重要，如何训练自己的口才",
            preId : '0009',
            nextTitle : "浅谈未来葫芦丝行业的发展前景",
            nextId : '24242342'
        }
    }
    render(){
        const { data } = this.props;
        return(
            <div>
                <h5>上一篇：
                    <Link href={{
                        pathname : "/infoDetails",
                        query : { id : data.preId }
                    }}>
                        <a className="ellipsis">{ data.preTitle }</a>
                    </Link>
                </h5>
                <h5>下一篇：
                    <Link href={{
                        pathname : "/infoDetails",
                        query : { id : data.nextId }
                    }}>
                        <a className="ellipsis">{ data.nextTitle }</a>
                    </Link>
                </h5>
                <aside>分享至：
                    <i className="iconfont icon-web_weixin"></i>
                    <i className="iconfont icon-webo"></i>
                    <i className="iconfont icon-iconfonticon6"></i>
                </aside>
                <style jsx>{`
                    div {
                        padding : 25px 0px;
                        color : #666;
                        position : relative;
                    }
                        h5 {
                            line-height : 30px;
                        }
                            a {
                                color : #f5a00a;
                                max-width : 400px;
                                display: inline-block;
                                vertical-align : top;
                            }
                            aside {
                                position : absolute;
                                right : 0px;
                                top : 0px;
                                width : 40%;
                                line-height : 100px;
                            }
                                aside > i {
                                    width : 30px;
                                    height : 30px;
                                    display: inline-block;
                                    font-size : 20px;
                                    line-height: 30px;
                                    text-align : center;
                                    border-radius : 50%;
                                    border : 1px solid #666;
                                    margin : 0px 5px;
                                    cursor : pointer;
                                }
                                aside > i:hover {
                                    color : #157dfb;
                                    border-color : #157dfb;
                                }
                `}</style>
            </div>
        )
    }
}
