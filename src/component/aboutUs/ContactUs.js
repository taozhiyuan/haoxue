
// 关于我们 》核心价值
import React, { Component } from 'react';
import Title from './Title.js'
import "./ContactUs.css";

import { Prompt } from 'react-router-dom';

export default class ContactUs extends Component {
    state = {
        isBlocking: false
    }
    inputChange= (event) => {
        this.setState({
            isBlocking: event.target.value.length > 0
        })
    }
    render() {
        const { isBlocking } = this.state;
        return (
            <section className="contact-us">
            <Prompt
                when={ isBlocking }
                message="您不提交在线留言的内容吗？"
            />
                <div className="main-public">
                    <Title>核心价值</Title>
                    <ul className="contact-us-list">
                        <li className="us-info">
                            <h1>公司总部 - 长沙</h1>
                            <h5>长沙市岳麓区麓谷企业广场F4栋901室</h5>
                            <h5>电话：0731-85607599</h5>
                            <h5>服务邮箱：service@haoxuehome.com</h5>
                        </li>
                        <li className="message-leave">
                            <h4>在线留言</h4>
                            <p>
                                <span>手&emsp;机：</span>
                                <input type="number" placeholder="请输入您的手机号" onChange={ this.inputChange }/>
                            </p>
                            <p>
                                <span>联系人：</span>
                                <input type="text" placeholder="请输入您的姓名" onChange={ this.inputChange }/>
                            </p>
                            <p>
                                <span>内&emsp;容：</span>
                                <textarea rows="4" cols="20" wrap="hard" placeholder="请输入您的内容" onChange={ this.inputChange }/>
                            </p>
                            <button>提交</button>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}