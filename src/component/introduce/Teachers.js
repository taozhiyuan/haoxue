
// 教培机构师资
import React, { Component } from 'react';
import './Teachers.css';
import { Link } from "react-router-dom";

export default class Teachers extends Component {
    render() {
        const data = this.props.data;
        // console.log(data)
        return (
            <div className="mechanism-teachers">
                <h4>机构师资<span>查看全部</span>
                </h4>
                <ul className="mechanism-teachers-list">
                { data.map((item,index)=>(
                    <li key={ index }>
                        <Link to={ `${this.props.url}/teacher` } >
                            <div><span>{ item.name }</span></div>
                            <h5>{ item.introduce }</h5>
                        </Link>
                    </li>
                )) }
                </ul>
            </div>
        );
    }
}