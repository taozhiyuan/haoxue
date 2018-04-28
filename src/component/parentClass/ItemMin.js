import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./ItemMin.css";

export default class ItemMin extends Component {
    constructor(){
        super()
        this.state = {
            imgPrefix : sessionStorage.getItem("imgPrefix")
        }
    }
    render(){
        const data = this.props.data;
        return (
            <li className="course-item-min">
                <Link to={{
                    pathname: this.props.url,
                    search: `id=${ data.id }`,
                }}>
                    <div className="imgPlaceholder">
                        <img src={ this.state.imgPrefix + data.photoOsskey } alt=""/>
                    </div>
                    <aside>
                        <h5>{ data.courseName }</h5>
                        <h4><i className="iconfont icon-guanzhu"></i>{ data.collections }</h4>
                    </aside>
                </Link>
            </li>
        );
    }
}