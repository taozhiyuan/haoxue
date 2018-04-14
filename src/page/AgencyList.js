
// 教培机构
import React, { Component } from 'react';
// import CoursesList from '../component/public/CoursesList.js';
import Nav from '../component/agency/Nav.js';
import List from '../component/agency/List.js';
import LoadMore from '../component/agency/LoadMore.js';
import AgencyDetailed from '../component/public/AgencyDetailed.js';
// import TeacherList from '../component/public/TeacherList.js';
import TeacherDetailed from '../component/public/TeacherDetailed.js';
import CourseDetails from '../component/public/CourseDetails.js';

import { Route, Switch } from "react-router-dom";

export default class Agency extends Component {
    render() {
        const { path } = this.props.match;
        // console.log(this.props.match)
        return (
            <div className="agency">
                <Switch>
                    <Route path={ `${path}/teacherList/teacher` } component={ TeacherDetailed } />
                    <Route path={ `${path}/courseList/courseDetails` } component={ CourseDetails } />
                    <Route path={ `${path}/agency` } component={ AgencyDetailed } />

                    <Route path={ `${path}` } render={({ match })=>(
                        <div className="main-public">
                            <Nav />
                            <List path={ match.path }/>
                            <LoadMore>加载更多</LoadMore>
                        </div>
                    )} />
                </Switch>
            </div>
        );
    }
}