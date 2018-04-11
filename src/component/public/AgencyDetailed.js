// 教培机构详情
import React, { Component } from 'react';
import TeacherDetailed from './TeacherDetailed.js';
import TextContainer from '../introduce/TextContainer.js';
import Teachers from '../introduce/Teachers.js';
import Curriculum from '../introduce/Curriculum.js';
import Map from '../introduce/Map.js';
import RelevantList from '../introduce/RelevantList.js';
import Path from '../agency/Path.js';

// import LoadMore from '../component/agency/LoadMore.js';
import Axios from '../../request/axiosHome.js';
import { Switch, Route } from "react-router-dom";

export default class AgencyDetailed extends Component {
    constructor(){
        super()
        this.state = {
            data : null
        }
    }
    componentWillMount(){
        Axios.detailed().then((res)=>{
            // console.log(res)
            this.setState({
                data : res.data
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        const data = this.state.data;
        console.log(this.props.match.url);
        if(!data) return false;
        return (
            <div className="agency-detailed">
                <Switch>
                    <Route exact path={ `${this.props.match.url}/teacher` } component={ TeacherDetailed } />
                    <Route path={ `${this.props.match.url}` } render={ ({ match })=>(
                        <div className="main-public">
                            <Path />
                            <TextContainer data={ data.introduce }/>
                            <Teachers data={ data.teachers } url={ match.url }/>
                            <Curriculum data={ data.curriculum } url={ match.url }/>
                            <Map />
                            <RelevantList />
                        </div>
                    ) } />
                </Switch>
            </div>
        );
    }
}