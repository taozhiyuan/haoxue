import React, { Component } from 'react'

export default class Support extends Component {
    render(){
        return(
            <section>
                <span>平台扶持</span>
                <ul>
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
                <style jsx>{`
                section {
                    width: 1200px;
                    margin: 0 auto;
                    padding-bottom: 180px;
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
                            text-align: left;
                            width: 25%;
                            height: 100px;
                        }
                        li:not(:last-child){
                            border-right: 1px solid #dadada;
                        }
                            li > h3,
                            li > h5 {
                                margin-left: 50px;
                            }
                            li > h3 {
                                font-size: 18px;
                                line-height: 18px;
                                margin-top: 8px;
                                margin-bottom: 20px;
                            }
                            li > h5 {
                                font-size: 14px;
                                width: 192px;
                                line-height: 22px;
                                color:#999999;
                            }
                `}</style>
            </section>
        )
    }
}