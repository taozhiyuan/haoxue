import React, { Component } from 'react'
import Layout from '../components/Layout.jsx'

export default class organHome extends Component {
    render(){
        return(
            <Layout>
                <div className="organHome-box">
                    <div className="organHome-banner">
                        <a href="#">机构免费入驻</a>
                        <p>申请到开通1个工作日内</p>
                    </div>
                    <div className="organHome-content">
                        <span>平台特色</span>
                        <ul className="organHome-feature">
                            <li>
                                <div></div>
                                <footer>
                                    <h3>入驻自动曝光</h3>
                                    <h5>新商家入驻</h5>
                                    <h5>资讯频道及新媒体推广</h5>
                                </footer>
                            </li>
                            <li>
                                <div></div>
                                <footer>
                                    <h3>便捷沟通能力</h3>
                                    <h5>1V1客户专服</h5>
                                    <h5>专业客户关系管理</h5>
                                </footer>
                            </li>
                            <li>
                                <div></div>
                                <footer>
                                    <h3>匹配精准流量</h3>
                                    <h5>本地化流量匹配</h5>
                                    <h5>区域客户附近推荐</h5>
                                </footer>
                            </li>
                            <li>
                                <div></div>
                                <footer>
                                    <h3>后台系统先进</h3>
                                    <h5>系统简单易用</h5>
                                    <h5>便捷高效管理</h5>
                                </footer>
                            </li>
                        </ul>
                        <span>平台扶持</span>
                        <ul className="organHome-support">
                            <li>
                                    <h3>新入驻机构</h3>
                                    <h5>好学家帮助您找到第一批学生不再为招生烦恼</h5>
                            </li>
                            <li>
                                    <h3>潜力机构</h3>
                                    <h5>好学家提供给大量数据分析优化您的教学质量</h5>
                            </li>
                            <li>
                                    <h3>认证机构</h3>
                                    <h5>好学家与认证机构提供业务分期服务，解决客户资金难题</h5>
                            </li>
                            <li>
                                    <h3>签约机构</h3>
                                    <h5>运营团队将提供签约机构结算展示、流量、服务等特权</h5>
                            </li>
                        </ul>
                    </div>
                </div>
                <style jsx>{`

                    .organHome-box{
                        margin-bottom: -20px;
                        width:100%;
                        background: #ffffff;
                    }

                        .organHome-banner {
                            width:100%;
                            background: url(../static/img/organ/organHome-banner.png);
                            height:400px;
                            position: relative;
                            overflow:hidden;
                            background-size:100% 100%;
                        }
                            .organHome-banner > a {
                                display: inline-block;
                                text-align: center;
                                padding:12px 72px;
                                color: #fefefe;
                                font-size: 16px;
                                background-color: #f5a00a;
                                border-radius: 20px;
                                position: relative;
                                top: 259px;
                                left: 50%;
                                transform: translateX(-50%);
                            }
                            .organHome-banner > p {
                                display: inline-block;
                                text-align: center;
                                font-size: 12px;
                                color: #f5a00a;
                                position: absolute;
                                top: 317px;
                                left: 50%;
                                transform: translateX(-50%);
                            }


                        .organHome-content {
                            width:1200px;
                            margin:0 auto;
                            padding-bottom: 180px;
                        }
                            .organHome-content > span {
                                text-align:center;
                                display:block;
                                font-size: 24px;
                                color: #1c1c1c;
                                line-height: 24px;
                                margin-top:130px;
                                margin-bottom:80px;
                            }
                            .organHome-content > ul {
                                overflow:hidden;
                            }
                                .organHome-feature > li {
                                    float:left;
                                    text-align:center;
                                    width:25%;
                                }
                                    .organHome-feature > li:nth-of-type(1) > div {
                                        background: url(../static/img/organ/organ-icon1.png);
                                        background-repeat:no-repeat;
                                        background-position:center center;
                                    }
                                    .organHome-feature > li:nth-of-type(2) > div {
                                        background: url(../static/img/organ/organ-icon2.png);
                                        background-repeat:no-repeat;
                                        background-position:center center;
                                    }
                                    .organHome-feature > li:nth-of-type(3) > div {
                                        background: url(../static/img/organ/organ-icon3.png);
                                        background-repeat:no-repeat;
                                        background-position:center center;
                                    }
                                    .organHome-feature > li:nth-of-type(4) > div {
                                        background: url(../static/img/organ/organ-icon4.png);
                                        background-repeat:no-repeat;
                                        background-position:center center;
                                    }
                                    .organHome-feature > li > div {
                                        width:100px;
                                        height:100px;
                                        border:3px solid #f5a00a;
                                        border-radius: 50%;
                                        margin:0 auto;
                                    }
                                        .organHome-feature > li > footer > h3 {
                                            font-size: 18px;
                                            color: #333333;
                                            margin-top: 30px;
                                            margin-bottom: 18px;
                                        }
                                        .organHome-feature > li > footer > h5 {
                                            font-size: 14px;
                                            line-height: 14px;
                                            color: #999999;
                                            margin-bottom: 10px;
                                        }
                                .organHome-support > li {
                                    float: left;
                                    text-align: left;
                                    width: 25%;
                                    height: 100px;
                                }
                                .organHome-support > li:not(:last-child){
                                    border-right: 1px solid #dadada;
                                }
                                    .organHome-support > li > h3,
                                    .organHome-support > li > h5{
                                        margin-left: 50px;
                                    }
                                    .organHome-support > li > h3{
                                        font-size: 18px;
                                        line-height: 18px;
                                        margin-top: 8px;
                                        margin-bottom: 20px;
                                    }
                                    .organHome-support > li > h5{
                                        font-size: 14px;
                                        width: 192px;
                                        line-height: 22px;
                                        color:#999999;
                                    }
                `}</style>
            </Layout>
            
        )
    }
}