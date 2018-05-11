


// 分期优势
import React, { Component } from 'react';
import Title from '..//public/Title.jsx';
import './Advantage.css';

export default class Advantage extends Component {
    render() {
        return (
            <div className="byStages-Advantage">
                <Title>分期优势</Title>
                <ul>
                    <li>
                        <div className="imgPlaceholder">
                            <img src={ require('./img/adv_1.png') } alt=""/>
                        </div>
                        <h3>资金周转</h3>
                        <h5>解决临时资金周转困难的问题</h5>
                    </li>
                    <li>
                        <div className="imgPlaceholder">
                            <img src={ require('./img/adv_2.png') } alt=""/>
                        </div>
                        <h3>信用财富</h3>
                        <h5>建立良好的信用记录，积累信用财富</h5>
                    </li>
                    <li>
                        <div className="imgPlaceholder">
                            <img src={ require('./img/adv_3.png') } alt=""/>
                        </div>
                        <h3>信息安全</h3>
                        <h5>安全，不会造成信息泄露</h5>
                    </li>
                    <li>
                        <div className="imgPlaceholder">
                            <img src={ require('./img/adv_4.png') } alt=""/>
                        </div>
                        <h3>合理理财</h3>
                        <h5>合理理财，保留充足的现金流。</h5>
                    </li>
                </ul>
            </div>
        );
    }
}
