
// 个人资料
import React, { Component } from 'react';
import Path from '../component/agency/Path.js';
import PersonInfo from '../component/personData/PersonInfo.jsx';
import Collection from '../component/personData/Collection.jsx';
import Study from '../component/personData/Study.jsx';
import './PersonData.css';
import { Route, Link } from "react-router-dom";

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
            target : 0
        }
    }
    render() {
        const { path } = this.props.match;
        const { target, catalog } = this.state;
        let menuDom = catalog.map(( item, index ) => (
            <Route exact path={ item.path } key={ index }
                children={({ match }) => (
                    <li 
                        className={ match ? "active" : "" }
                    >
                        <Link to={ item.to }>{ item.text }</Link>
                    </li>
                )}
            />
        ));
        return (
            <div className="person-data">
                <div className="main-public">
                    <Path />
                    <div className="portrait">
                        <i className="ion-person-add"></i>
                    </div>
                    <ul className="person-data-list">
                        { menuDom }
                    </ul>
                    <div className="person-data-content">
                        <Route exact path={ `${ path }/personInfo` } component={ PersonInfo } />
                        <Route exact path={ `${ path }/collection` } component={ Collection } />
                        <Route exact path={ `${ path }/study` } component={ Study } />
                    </div>
                </div>
            </div>
        );
    }
}
