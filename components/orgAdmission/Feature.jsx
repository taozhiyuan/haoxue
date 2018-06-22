import React, { Component } from 'react'

export default class Feature extends Component {
    render(){
        return(
            <section>
                <span>平台特色</span>
                <ul>
                    <li>
                        <div><img src="/static/img/organ/organ-icon1.png" alt=""/></div>
                        <footer>
                            <h3>入驻自动曝光</h3>
                            <h5>新商家入驻</h5>
                            <h5>资讯频道及新媒体推广</h5>
                        </footer>
                    </li>
                    <li>
                        <div><img src="/static/img/organ/organ-icon2.png" alt=""/></div>
                        <footer>
                            <h3>便捷沟通能力</h3>
                            <h5>1V1客户专服</h5>
                            <h5>专业客户关系管理</h5>
                        </footer>
                    </li>
                    <li>
                        <div><img src="/static/img/organ/organ-icon3.png" alt=""/></div>
                        <footer>
                            <h3>匹配精准流量</h3>
                            <h5>本地化流量匹配</h5>
                            <h5>区域客户附近推荐</h5>
                        </footer>
                    </li>
                    <li>
                        <div><img src="/static/img/organ/organ-icon4.png" alt=""/></div>
                        <footer>
                            <h3>后台系统先进</h3>
                            <h5>系统简单易用</h5>
                            <h5>便捷高效管理</h5>
                        </footer>
                    </li>
                </ul>
                <style jsx>{`
                    section {
                        width:1200px;
                        margin:0 auto;
                    }
                        span {
                            text-align:center;
                            display:block;
                            font-size: 24px;
                            color: #1c1c1c;
                            line-height: 24px;
                            margin-top:130px;
                            margin-bottom:80px;
                        }
                        ul {
                            overflow:hidden;
                        }
                            li {
                                float: left;
                                text-align: center;
                                width: 25%;
                            }
                                div {
                                    width: 100px;
                                    height: 100px;
                                    border: 2px solid #f5a00a;
                                    border-radius: 50%;
                                    margin: 0 auto;
                                    padding : 30px;
                                }
                                    footer > h3 {
                                        font-size: 18px;
                                        color: #333333;
                                        margin-top: 30px;
                                        margin-bottom: 18px;
                                    }
                                    footer > h5 {
                                        font-size: 14px;
                                        line-height: 14px;
                                        color: #999999;
                                        margin-bottom: 10px;
                                    }
                `}</style>
            </section>
        )
    }
}