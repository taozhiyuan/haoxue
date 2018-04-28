
// 我的学习
import React, { Component } from 'react';
import my_collection from './img/my_collection.png';
import Paging from '../home/Paging.js';
import CourseItem from './CourseItem.jsx';
import './Study.css';

import Axios from '../../request/axiosHome.js';
import { Link } from "react-router-dom";

export default class Study extends Component {
    constructor(){
        super()
        this.state = {
            data : null,
            paging : 1,
        }
    }
    componentWillMount(){
        Axios.Collection({
            access_token : sessionStorage.getItem("access_token")
        }).then((res)=>{
            // console.log(res.data.result)
            let course = [];
            for (const iterator of res.data.result) {
                if(iterator.collectionType === "2"){
                    course = [...course,iterator]
                }
            }
            this.setState({
                data : { course }
            })
        })
    }
    PagingCallback = (param) => {
        // console.log(param)
        this.setState({
            paging : param
        })
    }
    render() {
        // const { path } = this.props.match;
        const { type, typeActive, data, paging } = this.state;
        if(!data) { return false }
        let pagingStart = paging * 2 - 2;
        let pagingEnd = paging * 2;
        const course = data.course.slice(pagingStart, pagingEnd);
        return (
            <div className="my-collection">
                {/* <ul className="my-collection-type">
                    { this.state.type.map((item,index)=>(
                        <li
                            key={ index }
                            className={ typeActive===index?'active':null }
                            onClick={ ()=>{this.typeClick(index)} }
                        >{ item }</li>
                    )) }
                </ul> */}
                <ul className="my-collection-list">
                    { course.map((item, index)=>(
                        <CourseItem data={ item } key={ index } />
                    ))}
                </ul>
                <Paging 
                    length={ Math.ceil(data.course.length/2) }
                    PagingCallback={ this.PagingCallback }
                />
            </div>
        );
    }
}
