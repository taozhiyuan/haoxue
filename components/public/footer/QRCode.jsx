import React, { Component } from 'react'

export default class Guild extends Component {
    render(){
        return(
            <ul>
                <li>
                    <div><img src="/static/img/public/WechatIMG29.jpeg" alt=""/></div>
                    <h5>好学家公众号</h5>
                </li>
                <li>
                    <div><img src="/static/img/public/WechatIMG30.jpeg" alt=""/></div>
                    <h5>好学家小程序</h5>
                </li>
                <style jsx>{`
                    ul {
                        position : absolute;
                        top : 90px;
                        right : 0px;
                    }
                        ul > li {
                            display: inline-block;
                        }
                        ul > li:first-child {
                            margin-right : 20px;
                        }
                            div {
                                width : 120px;
                                height : 120px;
                                border-radius : 5px;
                                background-color : #859099;
                                overflow : hidden;
                            }
                                h5 {
                                    padding-top : 15px;
                                    text-align : center;
                                    color : #859099;
                                }
                `}</style>
            </ul>
        )
    }
}
