import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./ItemMin.css";

export default class ItemMin extends Component {
    render(){
        const data = this.props.data;
        return (
            <li className="course-item-min">
                <Link to={ this.props.to }>
                    <section></section>
                    <aside>
                        <h5>{ data.name }</h5>
                        <h4><i className="iconfont icon-guanzhu"></i>{ data.fabulous }</h4>
                    </aside>
                </Link>
            </li>
        );
    }
}