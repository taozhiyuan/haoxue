
// 路径
import React, { Component } from 'react';
import './Path.css';

export default class Path extends Component {
    render(){
        return (
            <div className="path">{ this.props.children }</div>
        );
    }
}