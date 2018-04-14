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
        const { path } = this.props.match;
        return (
            <div className="child-class">
                <Switch>
                    <Route path={ `${ path }/detailed` } component={ AgencyDetailed } />
                    <Route path={ `${ path }/courseDetails` } component={ CourseDetails } />
                    <Route path={ path } render={({ match })=>(
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