
// 相关列表
import React, { Component } from 'react';
import './RelevantList.css';

export default class Relevant extends Component {
    constructor(){
        super()
        this.state = {
            data : ['新东方教育','新东方教育','新东方教育','新东方教育']
        }
    }
    render() {
        const { data } = this.state;
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