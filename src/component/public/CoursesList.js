
//全部课程列表
import React, { Component } from 'react';
import Path from '../agency/Path.js';
import ItemMin from '../parentClass/ItemMin.js';
import Paging from '../home/Paging.js';
import Axios from '../../request/axiosHome.js';

import './CoursesList.css';

export default class CoursesList extends Component {
    constructor(){
        super()
        this.state = {
            data : []
        }
    }
    componentWillMount(){
        Axios.coursesList().then((res)=>{
            this.setState({
                data : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        const data = this.state.data;
        const url = `${this.props.match.url}/courseDetails`;
        // console.log(url)
        return (
            <div className="courses">
                <div className="main-public">
                    <Path />
                    <ul className="courses-list">
                        { data.map((item,index)=>(
                            <ItemMin data={ item } key={ index } to={ url }/>
                        )) }
                    </ul>
                    <Paging />
                </div>
            </div>
        );
    }
}