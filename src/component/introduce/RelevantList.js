
// 相关列表
import React, { Component } from 'react';
import './RelevantList.css';

export default class Relevant extends Component {
    render() {
        const { data } = this.props;
        return (
            <ul className="relevant-list">
                <li>类似机构</li>
                { data.map((item, index)=>(
                    <li key={ index }>{ item }</li>
                )) }
            </ul>
        );
    }
}