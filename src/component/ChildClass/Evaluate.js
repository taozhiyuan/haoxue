import React, { Component } from 'react';
import "./Evaluate.css"
import Title from "./Title.js";

export default class Evaluate extends Component {
    render(){
        const { data } = this.props;
        if(!data){return false}
        return (
            <div className="evaluate">
                <Title>课程简介</Title>
                <ul className="evaluate-cont">
                    <li>
                        <h6>{ data }</h6>
                    </li>
                </ul>
            </div>
        );
    }
}