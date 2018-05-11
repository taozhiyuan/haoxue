import React, { Component } from 'react';
import './InformationNav.css';
import { Route } from "react-router-dom";

export default class InformationNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            type : ['女性心理','育儿宝典','名师专栏'],
            sort : ['按热度','按时间'],
            typeActive : 0,
            sortActive : 0,
        }
    }
    typeEvent = (params) => {
        this.setState({
            typeActive : params
        })
        this.props.getSort(params)
    }
    sortEvent = (params) => {
        this.setState({
            sortActive : params
        })
    }
    render(){
        const { type, typeActive, sortActive, sort } = this.state;
        return (
            <nav className="information-nav">
                <ul className="information-type">
                    { type.map((item, index)=>(
                        <li 
                            className={ typeActive===index?"active":null }
                            key={ index }
                            onClick={ ()=>{this.typeEvent(index)} }
                        >{ item }</li>
                    )) }
                </ul>
                <ul className="information-sort">
                    { sort.map((item, index)=>(
                        <li 
                            className={ sortActive===index?"active":null }
                            key={ index }
                            onClick={ ()=>{this.sortEvent(index)} }
                        >{ item }</li>
                    )) }
                </ul>
            </nav>
        );
    }
}