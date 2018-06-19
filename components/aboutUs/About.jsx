import React, { Component } from 'react'
import Title from './Title.jsx'

export default class About extends Component {
    render(){
        return(
            <section>
                <div className="main-public">
                   <Title ch={['关于', '好学家']} en="ABOUT US" />
                   <article>
                       <h3>您身边的优质教育培训信息服务专家</h3>
                       <h5>好学家是一个为家长和孩子提供优质教培机构和课 内容的信息服务平台。平台整合了国内大 量线 上线下的教培机构，让用户可以快捷 高效的获 取教培信息。同时运用AI智能及 区块链技术， 为用户提供信息匹配、预约 试听、分期支付、评价积分等一站式教培需 求解决方案。</h5>
                       <h5>好学家 倡导父母需继续学习 并不断完善自我 的教育理 念，为 家长和孩 子分别设置了教培信 息服务板 块，并通过 提供分期支付服务减轻 好学家倡导父母需继续学习并不断完善自我的教育理念，为家长和孩子分别设置了教培信息服务板块，并通过提供分期支付服务减轻家长经济压力，让每个家庭都能轻松享受优质的教培资源，让每个家长陪伴孩子共同学习成长！</h5>
                        <div><img src="/static/img/aboutUs/about.png" alt=""/></div>
                   </article>
                </div>
                <footer>
                    <div className="main-public">
                        <h3>品牌诠释</h3>
                        <h4>好学：挖掘孩子的兴趣和天赋，鼓励孩子成为最好的自己，才是孩子好好学习的源动力。</h4>
                        <h4>家（HOME）：为了教育孩子而不断提升自己的父母，才能带动家庭学习氛围，伴随孩子一起成长进步。</h4>
                    </div>
                </footer>
                <style jsx>{`
                    section {
                        background-color : #FFF;
                    }
                        article {
                            padding-left : 400px;
                            position : relative;
                            padding-bottom : 30px;
                        }
                            article > h3 {
                                font-weight : bold;
                                color : #f5a00a;
                                padding-top : 30px;
                                padding-bottom : 15px;
                            }
                            article > h5 {
                                padding-bottom : 10px;
                                line-height : 30px;
                                color : #666;
                            }
                            article > div {
                                width : 360px;
                                height : 460px;
                                position : absolute;
                                left : 0px;
                                top : 0px;
                            }
                        footer {
                            background-color : #f5a00a;
                            color : #FFF;
                            height : 200px;
                        }
                            footer > div {
                                padding-left : 440px;
                            }
                                footer > div > h3 {
                                    line-height : 50px;
                                    padding-top : 40px;
                                    font-weight : bold;
                                }
                                footer > div > h4 {
                                    line-height : 30px;
                                }
                `}</style>
            </section>
        )
    }
}
