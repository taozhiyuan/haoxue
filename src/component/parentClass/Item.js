import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Item.css";

export default class Item extends Component {
    render(){
        const data = this.props.data;
        return (
            <li className="course-item">
                <Link to={ this.props.to }>
                    <section>
                        <span>{ data.fabulous }</span>
                    </section>
                    <aside>
                        <h5><b>{ data.name }</b></h5>
                        <h5>价格：<b>￥{ data.price }</b></h5>
                        <h4>{ data.team }</h4>
                    </aside>
                </Link>
            </li>
        );
    }
}