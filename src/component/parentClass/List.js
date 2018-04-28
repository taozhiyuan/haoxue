import React, { Component } from 'react';
import Item from './Item.js';
import './List.css';

export default class List extends Component {
    render(){
        const url = `${this.props.url}/course`;
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