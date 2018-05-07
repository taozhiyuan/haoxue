import React, { Component } from 'react';
import './SearchList.css';
import CourseItem from '../public/CourseItem.jsx';

export default class SearchList extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [{
                browsing : 10,
                id : 10,
                photoOsskey : 10,
                courseName : 10,
                orgName : 2123
            }]
        }
    }

    render(){
        return (
            <ul className="search-list">
                { this.state.data.map((item,index)=>(
                    <CourseItem data={ this.state.data } url={ this.props.match.url } />
                )) }
            </ul>
        );
    }
}