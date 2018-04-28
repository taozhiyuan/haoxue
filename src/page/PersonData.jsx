
// 个人资料
import React, { Component } from 'react';
import Path from '../component/agency/Path.js';
import PersonInfo from '../component/personData/PersonInfo.jsx';
import Collection from '../component/personData/Collection.jsx';
import Study from '../component/personData/Study.jsx';
import './PersonData.css';
import { Redirect, Route, Link } from "react-router-dom";

import Axios from '../request/axiosHome.js';

export default class PersonData extends Component {
    constructor(){
        super()
        this.state = {
            catalog : [
                {
                    text : "个人信息",
                    path : "/personData/personInfo/:bar*",
                    to : "/personData/personInfo"
                },{
                    text : "我的收藏",
                    path : "/personData/collection/:bar*",
                    to : "/personData/collection"
                },{
                    text : "我的学习",
                    path : "/personData/study/:bar*",
                    to : "/personData/study"
                },{
                    text : "设 置",
                    path : "/personData/setUp/:bar*",
                    to : "/personData/setUp"
                }],
            target : 0,
            imgPrefix : sessionStorage.getItem("imgPrefix")
        }
    }
    componentWillMount(){
        Axios.queryInfo({
            access_token : sessionStorage.getItem("access_token")
        }).then((res)=>{
            this.setState({
                photo : res.data.result.photoOsskey
            })
        })
    }
    render() {
        const { path } = this.props.match;
        const { target, catalog, imgPrefix, photo } = this.state;
        let menuDom = catalog.map(( item, index ) => (
            <Route exact path={ item.path } key={ index }
                children={({ match }) => (
                    <li className={ match ? "active" : "" }>
                        <Link to={ item.to }>{ item.text }</Link>
                    </li>
                )}
            />
        ));
        console.log(sessionStorage.getItem("access_token"))
        return (
            <div className="person-data">
                <div className="main-public">
                    <Path />
                    <div className="portrait">
                        { this.state.imgPrefix?
                            <img src={ imgPrefix + photo } alt=""/>:
                            <i className="ion-person-add"></i>
                        }
                    </div>
                    <ul className="person-data-list">
                        { menuDom }
                    </ul>
                    <div className="person-data-content">
                        { sessionStorage.getItem("access_token") ? null : <Redirect to="/userEntry/signIn" /> }
                        <Route exact path={ `${ path }/personInfo` } component={ PersonInfo } />
                        <Route exact path={ `${ path }/collection` } component={ Collection } />
                        <Route exact path={ `${ path }/study` } component={ Study } />
                    </div>
                </div>
            </div>
        );
    }
}
