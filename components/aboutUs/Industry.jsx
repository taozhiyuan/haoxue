import React, { Component } from 'react'

export default class Industry extends Component {
    render(){
        return(
            <section>
                <h3>行业协会合作矩阵</h3>
                <h5>好学家联合培训行业内8名权威专家共同发起湖南省培训产业联盟，联盟成员为培训领域的各类协会及其培训机构会员单位，产业联盟将积极促进行业资源共享，拉动协会会员共同发展进步。</h5>
                <ul>
                    <li>
                        <div className="default"></div>
                        <h4>中国教育协会</h4>
                    </li>
                    <li>
                        <div className="default"></div>
                        <h4>中国教育交流协会</h4>
                    </li>
                    <li>
                        <div className="default"></div>
                        <h4>中国当代教育协会</h4>
                    </li>
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
                                    width : 320px;
                                    float : left;
                                }
                                ul > li:not(:last-child){
                                    margin-right : 20px;
                                }
                                    div {
                                        height : 180px;
                                        background-color : #eee;
                                    }
                                    h4 {
                                        color : #666;
                                        padding-top : 20px;
                                    }
                `}</style>
            </section>
        )
    }
}
