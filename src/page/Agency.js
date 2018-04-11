
// 教培机构
import React, { Component } from 'react';
import CoursesList from '../component/public/CoursesList.js';
import Nav from '../component/agency/Nav.js';
import List from '../component/agency/List.js';
import LoadMore from '../component/agency/LoadMore.js';
// import PublicHead from '../component/PublicHead.js';

import { Route, Switch } from "react-router-dom";

export default class Agency extends Component {
    render() {
        return (
            <div className="agency">
                <Switch>
                    <Route path={ `${this.props.match.url}/courses` } component={ CoursesList } />
                    <Route path={ this.props.match.url } render={(props)=>(
                        <div className="main-public">
                            {console.log(props)}
                            <Nav />
                            <List />
                            <LoadMore>加载更多</LoadMore>
                        </div>
                    )} />
                </Switch>
            </div>
        );
    }
}