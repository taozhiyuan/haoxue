
// 关于我们 》联系我们
import React, { Component } from 'react';
import Title from './Title.jsx';
import "./ContactUs.css";

export default class ContactUs extends Component {
    render() {
        return (
            <section className="contact-us">
                <div className="main-public">
                    <Title>联系我们</Title>
                    <ul className="contact-us-list">
                        <li>
                            <img src={ require('./img/contact_us_1.png') } alt=""/>
                            <h5>地址：长沙市岳麓区麓谷企业广场F4栋901室</h5>
                        </li>
                        <li>
                            <img src={ require('./img/contact_us_2.png') } alt=""/>
                            <h5>电话：0731-85607599</h5>
                        </li>
                        <li>
                            <img src={ require('./img/contact_us_3.png') } alt=""/>
                            <h5>邮箱：service@haoxuehome.com</h5>
                        </li>
                        <li>
                            <img src={ require('./img/contact_us_4.png') } alt=""/>
                            <h5>微信：haoxuejia</h5>
                            <h5>QQ：23456789</h5>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}