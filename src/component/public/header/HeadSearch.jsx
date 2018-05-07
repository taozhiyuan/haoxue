import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from './ChoiceCity/Container.js';

import { inject, observer } from 'mobx-react';
// @inject('addTodo')

@observer
class HeadSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            radio : true
        }
    };
    getRadio = (e) => {
        this.setState({
            radio : !this.state.radio
        })
    }
    render() {
        // this.props.addTodo({ searchType : 1 })
        return (
            <div className="index-head-search">
                <input 
                    type="radio" 
                    name="search" 
                    value="course" 
                    id="searchCourse" 
                    checked={ this.state.radio?true:false }
                    onChange={ this.getRadio }
                />
                <label htmlFor="searchCourse">课程</label>
                <input type="radio" name="search" value="agency" id="searchAgency" 
                    checked={ this.state.radio?false:true }
                    onChange={ this.getRadio }
                /><label htmlFor="searchAgency">机构</label>

                <input type="text" placeholder="请输入课程/机构名称" />
                <Link to="/search" className="ion-ios-search-strong"></Link>
            </div>
        );
    }
}


export default HeadSearch;
