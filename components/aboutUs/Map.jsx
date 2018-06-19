import React, { Component } from 'react'

export default class Map extends Component {
    render(){
        return(
            <section>
                <div className="main-public">
                    <article>
                        <header>
                            <span>联系我们</span>&emsp;
                            <span>CONTACT US</span>
                        </header>
                        <h4>电话：0731-85607599</h4>
                        <h4>邮箱：service@haoxuehome.com</h4>
                        <h4>QQ：23456789</h4>
                        <h4>微信：haoxuejia</h4>
                        <h4>地址：长沙市岳麓区麓谷企业广场F4栋901室</h4>
                    </article>
                </div>
                <style jsx>{`
                    section {
                        height : 450px;
                        background-image : url('/static/img/aboutUs/map_bak.jpg');
                        background-position : center;
                        background-size : auto 100%;
                        margin-bottom : -20px;
                    }
                        article {
                            background-color : #f5a00a;
                            width : 400px;
                            height : 100%;
                            padding : 25px;
                            color : #FFF;
                        }
                            header {
                                line-height : 80px;
                                padding-bottom : 10px;
                            }
                                header > span:first-child {
                                    font-size : 24px;
                                    font-weight : bold;
                                }
                                header > span:last-child {
                                    font-size : 18px;
                                }
                            h4 {
                                line-height : 45px;
                            }
                `}</style>
            </section>
        )
    }
}
