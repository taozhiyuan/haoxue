
// 父母课堂
import React, { Component } from 'react';
import Nav from '../component/agency/Nav.js';
import ParentClassList from '../component/parentClass/ParentClassList.js';
import LoadMore from '../component/agency/LoadMore.js';
import CourseBeforehand from '../component/public/CourseBeforehand.js';
import BeforehandState from '../component/public/BeforehandState.js';


import { Route, Switch } from "react-router-dom";

export default class ParentClass extends Component {
    render() {
        // console.log(this.props.match)
        const { path } = this.props.match;
        return (
            <div className="parent-class">
                <Switch>
                    <Route path={ `${ path }/beforehandState` } component={ BeforehandState } />
                    <Route path={ `${ path }/courseBeforehand` } component={ CourseBeforehand } />
                    <Route path={ path } render={({ match })=>(
                        <div className="main-public">
                            <Nav />
                            <ParentClassList url={ match.path }/>
                            <LoadMore>加载更多</LoadMore>
                        </div>
                    )} />
                </Switch>
            </div>
        );
    }
}