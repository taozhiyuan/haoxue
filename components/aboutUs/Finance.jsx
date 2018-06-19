import React, { Component } from 'react'

export default class Finance extends Component {
    render(){
        return(
            <section>
                <h3>金融服务合作矩阵</h3>
                <h5>好学家与招商银行、百度金融、华融资产、博阳安泰等多家消金平台达成战略合作，为用户提供专业的分期支付服务，让学习不再因为短暂的资金周转而受阻，让家长和孩子的学习成长之路更轻松。</h5>
                <ul>
                    <li><img src="/static/img/aboutUs/finance_1.png" alt="" /></li>
                    <li><img src="/static/img/aboutUs/finance_2.png" alt="" /></li>
                    <li><img src="/static/img/aboutUs/finance_3.png" alt="" /></li>
                    <li><img src="/static/img/aboutUs/finance_4.png" alt="" /></li>
                </ul>
                <style jsx>{`
                    section {
                        padding-bottom : 70px;
                        background-color : #FFF;
                        text-align : center;
                    }
                        h3 {
                            padding-bottom : 25px;
                            color : #f5a00a;
                            font-size : 20px;
                        }
                        h5 {
                            color : #666;
                            line-height : 25px;
                            padding-bottom : 70px;
                            font-size : 14px;
                        }
                            ul {
                                overflow : hidden;
                            }
                                li {
                                    width : 235px;
                                    height : 80px;
                                    border : 1px solid #eee;
                                    float : left;
                                }
                                ul > li:not(:last-child){
                                    margin-right : 20px;
                                }
                `}</style>
            </section>
        )
    }
}
