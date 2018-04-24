
// 关于我们 》关于好学家
import React, { Component } from 'react';
import Title from './Title.jsx';
import style_0 from "./img/style_0.jpg";
import "./About.css";

export default class About extends Component {
    render() {
        return (
            <section className="about-introduce">
                <div className="main-public">
                    <Title>关于好学家</Title>
                    <ul className="about-introduce-text">
                        <li><img src={ style_0 } alt=""/></li>
                        <li>
                            <h1>About us</h1>
                            <h5>好学家是一个为K12阶段的孩子及其父母提供高品质教培信息的服务平台，由湖南省教育厅、湖南省培训协会及各大金融机构联合发起。秉承“专业、智能、公正、安全”的核心价值观，专注于为用户提供精准的机构及课程信息、优质教师资源匹配。致力于让孩子和妈妈共同学习进步，立志成为K12&女性教培信息服务平台的领军者。</h5>
                            <h5>好学家通过引进国内外专业的测评软件，整合行业内优质的教育培训机构和VIP老师资源，应用最新的区块链技术，为孩子和家长提供测评匹配、预约试听、分期支付、评价积分等一站式教培需求解决方案，辅助家长更深入地了解自己和孩子的潜能和兴趣，并做出科学、合理的教培规划，让家长和学生的选择更精准，让教育更科学。</h5>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}