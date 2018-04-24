
// 首页 ==》 资讯干货
import React, { Component } from 'react';
import './Information.css';
import NewsInformation from './NewsInformation.jsx';

import Axios from '../../request/axiosHome.js';
import evaluation from './img/evaluation.png';
import information_main from './img/information_main.png';
import PropTypes from 'prop-types';

export default class Information extends Component {
    constructor(){
        super()
        this.state = {
            data : null
        }
    }
    componentWillMount(){
        Promise.all([
            Axios.homeInformation({articleType : '2'}),
            Axios.homeInformation({articleType : '3'}),
            Axios.homeInformation({articleType : '4'}),
        ]).then(([w,c,t])=>{
            this.setState({
                data : {
                    woman : w.data.result,
                    child : c.data.result,
                    teacher : t.data.result,
                }
            })
        })
    }
    
    render() {
        const { data } = this.state;
        if(!data) { return false }
        console.log(data)
        return (
            <section className="home-information">
                <div className="main-public">
                    <h5 className="home-information-title">资讯干货</h5>
                    <NewsInformation data={ data.woman }/>
                    <NewsInformation data={ data.child }/>
                    <NewsInformation data={ data.teacher }/>
                </div>
            </section>
        );
    }
}

Information.contextTypes = {
    imgPrefix : PropTypes.string,
};