
//课程列表
import React, { Component } from 'react';
import Path from '../agency/Path.js';
import ItemMin from '../parentClass/ItemMin.js';
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
        const url = `${this.props.to}/courses`;
        return (
            <div className="courses">
                <div className="main-public">
                    <Path />
                    <ul className="courses-list">
                        { data.map((item,index)=>(
                            <ItemMin data={ item } key={ index } to={ url }/>
                            // <li key={ index }>
                            //     <div></div>
                            //     <aside>
                            //         <h5>{ item.name }</h5>
                            //         <span><i className="iconfont icon-guanzhu"></i>{ item.popularity }</span>
                            //     </aside>
                            // </li>
                        )) }
                    </ul>
                </div>
            </div>
        );
    }
}