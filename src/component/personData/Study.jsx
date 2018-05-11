
// 我的学习
import React, { Component } from 'react';
import Paging from '../public/Paging.jsx';
import StudyItem from './StudyItem.jsx';
import './Study.css';

import Axios from '../../global/axios.js';
import { Link } from "react-router-dom";

export default class Study extends Component {
    constructor(){
        super()
        this.state = {
            data : [],
            paging : 1,
        }
    }
    componentWillMount(){
        Axios.study({
            access_token : sessionStorage.getItem("access_token")
        }).then((res)=>{
            this.setState({
                data : res.data.result||[]
            })
        }).catch((err)=>{
            // console.log(err)
            this.props.history.push('/userEntry/signIn');
            sessionStorage.removeItem("imgPrefix");
        })
    }
    PagingCallback = (param) => {
        // console.log(param)
        this.setState({
            paging : param
        })
    }
    render() {
        const { data, paging } = this.state;
        if(!data) { return false }
        let pagingStart = paging * 2 - 2;
        let pagingEnd = paging * 2;
        const targetPageNumber = data.slice(pagingStart, pagingEnd);
        return (
            <div className="my-study">
                <h4 className="title">我的学习</h4>
                <ul className="my-study-list">
                    { targetPageNumber.map((item, index)=>(
                        <StudyItem data={ item } key={ index } />
                    ))}
                </ul>
                { data.length === 0 ? null : <Paging 
                    length={ Math.ceil(data.length/2) }
                    PagingCallback={ this.PagingCallback }
                /> }
            </div>
        );
    }
}
