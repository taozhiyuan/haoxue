import React, { Component } from 'react'
import Title from './Title.jsx'

export default class Manager extends Component {
    render(){
        return(
            <section>
                <div className="main-public">
                    <Title 
                        ch={['管理', '团队']} 
                        en="MANAGEMENT TEAM" 
                        note="只有完美的团队才能成就我平凡的个人！团结产生力量，凝聚产生希望！"
                    />
                    <ul>
                        <li>
                            <div className="default"></div>
                            <footer>
                                <h3>李 玲</h3>
                                <h5>董事长</h5>
                            </footer>
                        </li>
                        <li>
                            <div className="default"></div>
                            <footer>
                                <h3>肖 薇</h3>
                                <h5>总经理（CEO）</h5>
                            </footer>
                        </li>
                        <li>
                            <div className="default"></div>
                            <footer>
                                <h3>王 旺</h3>
                                <h5>运营总监（COO）</h5>
                            </footer>
                        </li>
                        <li>
                            <div className="default"></div>
                            <footer>
                                <h3>葛 勇</h3>
                                <h5>商务总监</h5>
                            </footer>
                        </li>
                    </ul>
                </div>
                <style jsx>{`
                    section {
                        height : 820px;
                        background-color : #FFF;
                    }
                        ul {
                            overflow : hidden;
                        }
                            li {
                                float : left;
                                width : 285px;
                                border : 1px solid #eee;
                            }
                            ul > li:not(:last-child){
                                margin-right : 20px;
                            }
                                li > div {
                                    height : 340px;
                                }
                                li > footer {
                                    height : 80px;
                                    text-align : center;
                                    padding : 10px;
                                }
                                    footer > h3 {
                                        font-weight : bold;
                                        color : #f5a00a;
                                        line-height : 35px;
                                    }
                                    footer > h5 {
                                        color : #999;
                                    }
                `}</style>
            </section>
        )
    }
}
