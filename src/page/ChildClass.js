import React, { Component } from 'react';
import Nav from '../component/agency/Nav.js';
import ParentClassList from '../component/parentClass/ParentClassList.js';
import AgencyDetailed from '../component/public/AgencyDetailed.js';
import CourseDetails from '../component/public/CourseDetails.js';
import LoadMore from '../component/agency/LoadMore.js';

import { Route, Switch } from "react-router-dom";

export default class ChildClass extends Component {
    render() {
        // console.log(this.props.match)
        return (
            <div className="child-class">
                <Switch>
                    <Route path={ `${this.props.match.url}/detailed` } component={ AgencyDetailed } />
                    <Route path={ `${this.props.match.url}/course` } component={ CourseDetails } />
                    <Route path={ this.props.match.url } render={({ match })=>(
                        <div className="main-public">
                            <Nav />
                            <ParentClassList to={ match.path }/>
                            <LoadMore>加载更多</LoadMore>
                        </div>
                    )} />
                </Switch>
            </div>
        );
    }
}