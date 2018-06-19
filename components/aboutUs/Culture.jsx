import React, { Component } from 'react'
import Title from './TitleWhite.jsx'

export default class Culture extends Component {
    render(){
        return(
            <section>
                <div className="main-public">
                    <Title 
                        ch={['企业', '文化']} 
                        en="CORPORATE CULTURE" 
                        note="团队99里精神：不到最后一里不言放弃，不到最后一里不语成功。"
                    />
                    <ul>
                        <li>
                            <div><img src="/static/img/aboutUs/culture_1.png" alt=""/></div>
                            <h3>核心价值观</h3>
                            <h5>用爱服务、潜心专注</h5>
                        </li>
                        <li>
                            <div><img src="/static/img/aboutUs/culture_2.png" alt=""/></div>
                            <h3>服务理念</h3>
                            <h5>每一次服务都是第一次服</h5>
                            <h5>务，每一次服</h5>
                            <h5>务都是上百次服务</h5>
                        </li>
                        <li>
                            <div><img src="/static/img/aboutUs/culture_3.png" alt=""/></div>
                            <h3>使 命</h3>
                            <h5>提升家庭学习氛围，推</h5>
                            <h5>动民族发展进步</h5>
                        </li>
                        <li>
                            <div><img src="/static/img/aboutUs/culture_4.png" alt=""/></div>
                            <h3>愿 景</h3>
                            <h5>提升家庭学习氛围，推</h5>
                            <h5>动民族发展进步</h5>
                        </li>
                    </ul>
                </div>
                <style jsx>{`
                    section {
                        height : 770px;
                        background-image : url('/static/img/aboutUs/culture_bak.jpg');
                        background-position : center;
                        background-size : auto 100%;
                    }
                        ul {
                            overflow : hidden;
                        }
                            li {
                                width : 285px;
                                height : 390px;
                                background-color : #FFF;
                                padding : 70px 60px;
                                text-align : center;
                                color : #666;
                                float : left;
                            }
                            li:hover {
                                color : #FFF;
                                background-color : #f5a00a;
                            }
                            ul > li:not(:last-child){
                                margin-right : 20px;
                            }
                                li > div {
                                    width : 88px;
                                    height : 88px;
                                    border-radius : 50%;
                                    margin : 0 auto;
                                    background-color : #FFF;
                                    border : 2px solid #f5a00a;
                                }
                                li > h3 {
                                    padding-top : 65px;
                                    padding-bottom : 25px;
                                }
                                li > h5 {
                                    line-height: 23px;
                                }
                `}</style>
            </section>
        )
    }
}
