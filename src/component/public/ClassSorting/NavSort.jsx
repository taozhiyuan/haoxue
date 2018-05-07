import React, { Component } from 'react';
import './NavSort.css';

export default class NavSort extends Component {
    constructor(props){
        super(props)
        this.state = {
            sortId : ['synthesiss','scale','praise'],
            sortText : ['综合','价格','人气'],
            sortActive : 0
        }
    }
    clickSort = (parame) => {
        this.setState({
            sortActive : parame
        })
    }
    render(){
        const { sortActive, sortText } = this.state;
        return (
            <ul className="nav-sort">
                { sortText.map((item, index)=>(
                    <li key={ index }
                        onClick={ ()=>{ this.clickSort(index) } }
                        className={ sortActive===index?"active":null }
                    >
                        <i className={ sortActive===index?"ion-arrow-down-b":"ion-arrow-up-b" }></i>
                        { item }
                    </li>
                )) }
            </ul>
        );
    }
}