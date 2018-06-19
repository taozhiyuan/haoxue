import React, { Component } from 'react'

export default class Expert extends Component {
    render(){
        return(
            <section>
                <h3>专家顾问合作矩阵</h3>
                <h5>好学家引进国内外专业的测评机构韦氏、加德纳、SCL90心理、FDSP兴趣、MBTI性格分析、艾森克人格测验等，特邀华南师范大学及湖南一师范的教育及心理专家团队，为用户提供专业权威的测评工具，辅助家长和孩子更科学的规划教培学习。</h5>
                <div className="expert-item">
                    <img src="/static/img/aboutUs/cooperation_1.png" alt=""/>
                    <h6>加德纳的多元智能理论</h6>
                </div>
                <div className="expert-item">
                    <img src="/static/img/aboutUs/cooperation_2.png" alt=""/>
                    <h6>MBTI性格分析</h6>
                </div>
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
                        div.expert-item {
                            display: inline-block;
                            padding : 0px 50px;
                        }
                            img {
                                height : 300px;
                                width : auto;
                            }
                            h6 {
                                color : #999;
                                line-height : 80px;
                            }
                `}</style>
            </section>
        )
    }
}
