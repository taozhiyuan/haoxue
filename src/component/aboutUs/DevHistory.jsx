
// 关于我们 》发展历程
import React, { Component } from 'react';
import Title from './Title.jsx';
import "./DevHistory.css";

export default class DevHistory extends Component {
    render() {
        return (
            <section className="dev-history">
                <div className="main-public">
                    <Title>发展历程</Title>
                    <ul className="dev-history-list">
                        <li>
                            <h4>2017年12月1日</h4>
                            <h5>根据多年教育产业运营经验，及国内外教育产业数据分析，应市场强烈需求，“好学家” 应运而生</h5>
                        </li>
                        <li>
                            <h4>2018年3月1日</h4>
                            <h5>“好学家”品牌LOGO正式推出。</h5>
                        </li>
                        <li>
                            <h4>2018年3月6日</h4>
                            <h5>“好学家”官方网站等待上线。</h5>
                        </li>
                        <li>
                            <h4>2018年3月21日</h4>
                            <h5>“好学家”基于腾讯微信社交圈，开发了1.0版本小程序。</h5>
                        </li>
                        <li>
                            <h4>2018年3月23日</h4>
                            <h5>“好学家”域名www.haoxuehome.com注册成功。</h5>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}