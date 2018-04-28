
// 我的收藏
import React, { Component } from 'react';
import my_collection from './img/my_collection.png';
import Paging from '../home/Paging.js';
import CourseItem from './CourseItem.jsx';
import AgencyItem from './AgencyItem.jsx';
import './Collection.css';

import Axios from '../../request/axiosHome.js';
import { Link } from "react-router-dom";

export default class Collection extends Component {
    constructor(){
        super()
        this.state = {
            type : ['课程','教育机构'],
            typeActive : 0,
            data : null,
            paging : 1,
        }
    }
    componentWillMount(){
        console.log(sessionStorage.getItem("access_token"))
        Axios.Collection({
            access_token : sessionStorage.getItem("access_token")
        }).then((res)=>{
            console.log(res.data.result)
            let course = [];
            let agency = [];
            for (const iterator of res.data.result) {
                if(iterator.collectionType === "2"){
                    course = [...course,iterator]
                }else{
                    agency = [...agency,iterator]
                }
            }
            // console.log(course)
            // console.log(agency)
            this.setState({
                data : {
                    course,
                    agency
                }
            })
        })
    }
    typeClick = (parame) => {
        this.setState({
            typeActive : parame
        })
    }
    PagingCallback = (param) => {
        console.log(param)
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
        const agency = data.agency.slice(pagingStart, pagingEnd);
        // const target = typeActive === 0 ? course : agency ;
        const dataLength = typeActive === 0 ? data.course.length : data.agency.length ;
        return (
            <div className="my-collection">
                <ul className="my-collection-type">
                    { this.state.type.map((item,index)=>(
                        <li
                            key={ index }
                            className={ typeActive===index?'active':null }
                            onClick={ ()=>{this.typeClick(index)} }
                        >{ item }</li>
                    )) }
                </ul>
                <ul className="my-collection-list">
                    { typeActive === 0 ? (course.map((item, index)=>(
                        <CourseItem data={ item } key={ index } />
                    )))
                    :
                    (agency.map((item, index)=>(
                        <AgencyItem data={ item } key={ index } />
                    )))
                    }
                </ul>
                <Paging 
                    length={ Math.ceil(dataLength/2) }
                    PagingCallback={ this.PagingCallback }
                />
            </div>
        );
    }
}
