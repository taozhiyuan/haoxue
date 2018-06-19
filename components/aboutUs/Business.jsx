import React, { Component } from 'react'
import Title from './Title.jsx'

export default class Business extends Component {
    render(){
        return(
            <section>
                <div className="main-public">
                    <Title 
                        ch={['业务', '服务']} 
                        en="BUSINESS SERVICES" 
                        note="只有完美的团队才能成就我平凡的个人！团结产生力量，凝聚产生希望！"
                    />
                    <ul>
                        <li>
                            <div><img src="/static/img/aboutUs/business_1.png" alt=""/></div>
                            <div>
                                <h3>01 分期支付</h3>
                                <h5>好学家与招商银行、百度金融、华融资产、博阳安泰等多家消金平台达成战略合作，针对家庭教育消费需求提供免息或低息的分期产品服务。分期付，是一种消费态度，让学习不再因为经济问题而犹豫，让家长和孩子的学习成长之路更轻松。</h5>
                                <p><i></i>分期支付方式多样：可采用银行信用卡分期、也可直接在好学家平台发起分期申请</p>
                                <p><i></i>分期支付利息低：大部分教培课程可免息或低于信用卡利息支付</p>
                            </div>
                        </li>
                        <li>
                            <div><img src="/static/img/aboutUs/business_2.png" alt=""/></div>
                            <div>
                                <h3>02 评测匹配</h3>
                                <h5>好学家引入区块链技术，去中心化打造公开、公平、公正的权威评价系统，让每一个家长都能客观分享真实的感受，看到最真实的口碑信息。</h5>
                                <p><i></i>点评透明化：确保每一条评价真实有效</p>
                                <p><i></i>点评排名：以学员评分为标准，让每一次推荐都合理公正，让用户的选择更具参考性</p>
                            </div>
                        </li>
                        <li>
                            <div><img src="/static/img/aboutUs/business_3.png" alt=""/></div>
                            <div>
                                <h3>03 信息搜索</h3>
                                <h5>好学家平台整合了国内大量线上线下的教培机构和课程，通过为合作机构提供CRM系统，让机构可灵活并及时更新相关内容。平台采用智能定位及大数据匹配技术，让用户可以快捷高效的获取教培信息，同时让家长参考测评结果再调整教培方向科学的进行教培规划。</h5>
                                <p><i></i>信息品类集中：平台分别针对家长和孩子划分教培板块，每个板块细分不同类别</p>
                                <p><i></i>信息匹配精准：介入最新技术为用户提供去广告化精准教培信息</p>
                            </div>
                        </li>
                        <li>
                            <div><img src="/static/img/aboutUs/business_4.png" alt=""/></div>
                            <div>
                                <h3>04 口碑评价</h3>
                                <h5>好学家引入区块链技术团队，打造去中心化、公开、公平、公正的权威评价系统，让每一个家长都能客观分享真实的体验感受，看到最真实的去广告化口碑信息。</h5>
                                <p><i></i>区块链技术介入让用户点评透明化，确保每一条评价真实公正</p>
                                <p><i></i>权重排名以用户评价为标准，让每一次推荐都去广告化匹配，让用户的选择更理性</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <style jsx>{`
                    section {
                        padding-bottom : 100px;
                    }
                        ul > li:not(:last-child){
                            margin-bottom : 20px;
                        }
                        li {
                            height : 235px;
                            background-color : #FFF;
                            overflow : hidden;
                        }
                            li > div {
                                height : 100%;
                                float : left;
                            }
                            li > div:first-child {
                                width : 350px;
                            }
                            li > div:last-child {
                                width : 850px;
                                padding : 30px 40px;
                            }
                                h3 {
                                    color : #f5a00a;
                                    font-weight : bold;
                                    line-height: 40px;
                                }
                                h5 {
                                    color : #666;
                                    line-height : 20px;
                                    padding-top : 10px;
                                    padding-bottom : 20px;
                                }
                                p {
                                    color : #f5a00a;
                                    font-size : 14px;
                                    line-height : 30px;
                                }
                                 p > i {
                                     display: inline-block;
                                     width : 8px;
                                     height : 8px;
                                     background-color : #f5a00a;
                                     border-radius : 50%;
                                     margin-right : 10px;
                                 }
                `}</style>
            </section>
        )
    }
}
