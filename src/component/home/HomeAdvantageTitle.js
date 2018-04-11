import React, { Component } from 'react';
import './HomeAdvantageTitle.css';

export default class HomeAdvantageTitle extends Component {
    render() {
        return (
            <div className="home-section-title">
                <h1>{ this.props.h1 }</h1>
                <h4>{ this.props.h4 }</h4>
            </div>
        );
    }
}
