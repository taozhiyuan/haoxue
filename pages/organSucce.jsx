import React, { Component } from 'react'
import Layout from '../components/Layout.jsx'
import Link from 'next/link'

export default class organHome extends Component {
    render(){
        return(
            <Layout>
                <div className="organSucce-box">
                    <div className="organSucce-banner"></div>
                    <div className="organSucce-content">
                        <div>
                            <span>
                                <img src="../static/img/organ/organSucce-icon.png"/>
                            </span>
                            <footer>
                                <h3>申请成功!</h3>
                                <h5>已发送注册信息到您的手机号，注意查收请耐心等待审核（1个工作日内）</h5>
                            </footer>
                        </div>
                        <Link href="/"><a>返回首页</a></Link>
                    </div>
                </div>
                <style jsx>{`
                    .organSucce-box{
                        margin-bottom: -20px;
                        width:100%;
                        background: #ffffff;
                    }
                        .organSucce-banner{
                            width:100%;
                            background: url(../static/img/organ/organSucce-banner.png);
                            height:400px;
                            overflow:hidden;
                            background-size:100% 100%;
                        }
                        .organSucce-content{
                            width:1200px;
                            margin:0 auto;
                            text-align:center;
                            padding-bottom: 180px;
                        }
                            .organSucce-content > div > span{
                                display:block;
                                width:120px;
                                height:120px;
                                background-color: #5aa517;
                                margin: 0 auto;
                                margin-top:128px;
                                border-radius: 50%;
                            }
                                .organSucce-content > div > span > img {
                                    width:55px;
                                    height:39px;
                                    position: relative;
                                    top:50%;
                                    transform: translateY(-50%);
                                }
                                .organSucce-content > div > footer > h3 {
                                    font-size: 30px;
                                    line-height: 30px;
                                    margin-top: 30px;
                                    color: #333333;
                                }
                                .organSucce-content > div > footer > h5 {
                                    width: 252px;
                                    font-size: 14px;
                                    line-height: 20px;
                                    margin: 0 auto;
                                    margin-top: 20px;
                                    color: #666666;
                                }
                        .organSucce-content > a {
                            display: inline-block;
                            margin-top: 120px;
                            font-size: 14px;
                            color: #ffffff;
                            padding: 13px 61px;
                            background-color: #f5a00a;
                            border-radius: 4px;
                        }
                `}</style>
            </Layout>
        )
    }
}