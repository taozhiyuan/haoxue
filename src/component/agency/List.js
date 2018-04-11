
// 教培机构列表
import React, { Component } from 'react';
import Item from './Item.js';
import Axios from '../../request/axiosHome.js';
import './List.css';

import { Link } from "react-router-dom";

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    };
    componentWillMount = () => {
        Axios.MechanismList().then((res)=>{
            this.setState({
                data : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return (
            <ul className="mechanism-list">
            {this.state.data.map((item,index)=>(
                <li key={ index }>
                    <Link to="/agency/courses">
                        <div>
                            <span>人气：{ item.popularity }</span>
                        </div>
                        <aside>
                            <h4>{ item.team }</h4>
                            <h5>地址:{ item.add }</h5>
                            <h5>咨询电话：{ item.tel }</h5>
                            <span><i className="iconfont icon-dianzan"></i>{ item.fabulous }</span>
                        </aside>
                    </Link>
                </li>
            ))}
            </ul>
        );
    }
}