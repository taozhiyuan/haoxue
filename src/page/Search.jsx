import React, { Component } from 'react';
import NavSort from '../component/public/ClassSorting/NavSort.jsx';
import SearchList from '../component/search/SearchList.jsx';
import CourseItem from '../component/public/CourseItem.jsx';

import Axios from '../request/axiosHome.js';
import { Route, Switch } from "react-router-dom";

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [{
                browsing : 10,
                id : 10,
                photoOsskey : 10,
                courseName : "钢琴体验课程",
                orgName : 2123
            }]
        }
    };
    render() {
        return (
            <section className="search">
                <div className="main-public">
                    <nav className="nav-class-sorting">
                        <NavSort />
                    </nav>
                    <ul className="agency-course-list">
                        { this.state.data.map((item, index)=>(
                            <CourseItem data={ item } url={ this.props.match.url } key={ index }/>
                        )) }
                    </ul>
                </div>
            </section>
        );
    }
}