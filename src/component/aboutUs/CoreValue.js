
// 关于我们 》核心价值
import React, { Component } from 'react';
import Title from './Title.js';
import "./CoreValue.css";
import core_1 from './img/core_1.svg';
import core_2 from './img/core_2.svg';
import core_3 from './img/core_3.svg';
import core_4 from './img/core_4.svg';

export default class CoreValue extends Component {
    render() {
        return (
            <section className="core-value">
                <div className="main-public">
                    <Title>核心价值</Title>
                    <ul className="core-value-list">
                        <li><img src={ core_1 } alt="" />智能</li>
                        <li><img src={ core_2 } alt="" />诚信</li>
                        <li><img src={ core_3 } alt="" />安全</li>
                        <li><img src={ core_4 } alt="" />专业</li>
                    </ul>
                </div>
            </section>
        );
    }
}