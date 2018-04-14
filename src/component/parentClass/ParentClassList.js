import React, { Component } from 'react';
import Item from './Item.js';
import Axios from '../../request/axiosHome.js';
import './ParentClassList.css';

export default class ParentClassList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            len : 16
        }
    };
    componentWillMount = () => {
        Axios.parentClassList().then((res)=>{
            this.setState({
                data : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render(){
        const url = `${this.props.url}/courseBeforehand`;
        return (
            <ul className="parentClass-list">
            {this.state.data.map((item,index)=>(
                <Item data={ item } key={ index } to={ url }/>
            ))}
            </ul>
        );
    }
}