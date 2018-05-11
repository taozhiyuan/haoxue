// 教培机构详情
import React, { Component } from 'react';
import Path from '../../component/public/Path.jsx';
import TeacherDetailed from './TeacherDetailed.jsx';
import TextContainer from '../../component/agency/TextContainer.jsx';
import Teachers from '../../component/agency/Teachers.jsx';
import Curriculum from '../../component/agency/Curriculum.jsx';
import Map from '../../component/agency/Map.jsx';
import RelevantList from '../../component/agency/RelevantList.jsx';

import CourseDetails from '../course/CourseDetails.jsx';
import AllTeacherList from './AllTeacherList.jsx';
import AllCoursesList from '../course/AllCoursesList.jsx';
import { getUrlParam } from '../../global/getUrlParam.js';
// import LoadMore from '../component/agency/LoadMore.js';
import Axios from '../../global/axios.js';
import { Switch, Route } from "react-router-dom";

export default class AgencyDetailed extends Component {
    constructor(props){
        super(props)
        this.state = {
            introduce : null,
            TeacherList : [],
            courseList : [],
            SimilarAgency : [],
        }
    }
    request = (parame) => {
        Promise.all([
            Axios.AgencyDetailedServer({
                ip : window.returnCitySN["cip"],
                id : parame,
                userId : ''
            }),
            Axios.AgencyTeacherList({ orgId : parame }),
            Axios.parentClassList({ orgId : parame }),
            Axios.SimilarAgency({ orgId : parame }),
        ])
        .then(([d, t, p, s]) => {
            this.setState({
                introduce : d.data.result,
                TeacherList : t.data.result,
                courseList : p.data.result,
                SimilarAgency : s.data.result,
            })
        });
    }
    componentWillMount(){
        this.request(getUrlParam(this.props.location).id)
    }
    componentWillReceiveProps(nextProps){
        this.request(getUrlParam(nextProps.location).id)
    }
    render() {
        const { introduce, TeacherList, courseList, SimilarAgency } = this.state;
        const { path } = this.props.match;
        if(!introduce){ return false }
        return (
            <Switch>
                <Route path={ `${path}/course` } component={ CourseDetails } />
                <Route path={ `${path}/teacher` } component={ TeacherDetailed } />
                <Route path={ `${path}/teacherList` } component={ AllTeacherList } />
                <Route path={ `${path}/courseList` } component={ AllCoursesList } />
                <Route path={ path } render={ ({ match })=>(
                    <div className="agency-detailed">
                        <div className="main-public">
                            <Path />
                            <TextContainer data={ introduce }/>
                            <Teachers data={ TeacherList } url={ match.url }/>
                            <Curriculum data={ courseList } url={ match.url }/>
                            <Map />
                            <RelevantList data={ SimilarAgency }/>
                        </div>
                    </div>
                ) } />
            </Switch>
        );
    }
}
