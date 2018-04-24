import React, { Component } from 'react';
import Item from './Item.js';
import Axios from '../../request/axiosHome.js';
import './List.css';

export default class List extends Component {
    constructor(props){
        super(props);
    };
    render(){
        const url = `${this.props.url}/course`;
        const imgPrefix = "http://hxj-oss-bucket.oss-cn-shenzhen.aliyuncs.com/";
        if(!this.props.data){ return false }
        return (
            <ul className="parentClass-list">
            {this.props.data.map((item,index)=>(
                <Item data={ item } key={ index } to={ url }/>
            ))}
            </ul>
        );
    }
}