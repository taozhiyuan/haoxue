import React, { Component } from 'react';
import './LoadMore.css';

export default class LoadMore extends Component {
    render(){
        return (
            <button className="load-more">
                { this.props.children }
            </button>
        );
    }
}