import Link from 'next/link';
import React, { Component } from 'react';
import Container from './ChoiceCity/Container.js';

export default class Position extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityVisibi : false
        }
    };
    changeVisibi = () => {
        this.setState({
            cityVisibi : !this.state.cityVisibi
        });
    }
    render(){
        return (
            <div className="head-position"
                onClick={ this.changeVisibi }
            >
                <i className="icon ion-md-pin"></i>
                <span>长沙</span>
                <i className="icon ion-md-arrow-dropdown"></i>
                { this.state.cityVisibi && <Container /> }
                <style jsx>{`
                    div.head-position {
                        cursor : pointer;
                        margin-right : 75px;
                        font-size : 14px;
                        margin-top : 30px;
                    }
                        div.head-position > i:first-of-type {
                            color : #F5A00A;
                        }
                        div.head-position > span {
                            color : #F5A00A;
                            width : 45px;
                            display: inline-block;
                            text-align : center;
                        }
                        div.head-position > i:last-of-type {
                            color : #666;
                        }
                `}</style>
            </div>
        )
    }
}