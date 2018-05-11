
//机构详情 》机构详情区域块标题
import React, { Component } from 'react';
import './DetailedTitle.css';

import { Link } from "react-router-dom";

export default class DetailedTitle extends Component {
    render() {
        return (
            <h5 className="Detailed-Title">
                { this.props.value }
                <Link to={ this.props.url } className="ion-more"></Link>
            </h5>
        );
    }
}