import React, { Component } from 'react';
// import { Route, Link, Redirect } from "react-router-dom";
import Container from './ChoiceCity/Container.js';


class ChoiceCity extends Component {
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
    render() {
        return (
            <div className="head-choice-city" onClick={ this.changeVisibi }>
                长沙<i className="ion-arrow-down-b"></i>
                { this.state.cityVisibi && <Container /> }
            </div>
        );
    }
}


export default ChoiceCity;
