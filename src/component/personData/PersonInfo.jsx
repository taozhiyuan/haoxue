
// 个人信息
import React, { Component } from 'react';
import Nickname from './Nickname.jsx';
import Name from './Name.jsx';
import Birthday from './Birthday.jsx';
import Gender from './Gender.jsx';
import Tel from './Tel.jsx';
import Address from './Address.jsx';
import PictureUpload from './PictureUpload.jsx';
import './PersonInfo.css';

import Axios from '../../request/axiosHome.js';
// import { Route, Switch } from "react-router-dom";

export default class PersonInfo extends Component {
    constructor(){
        super()
        this.state = {
            data : {
                nickname : "",
                name : "",
                birthday : "",
                male : true,
                female : false,
                tel : "",
                address : "",
            },
            submit: false
        }
    }
    componentWillMount(){
        
    }
    getData = (param) => {
        this.setState({
            data : { ...this.state.data,...param }
        },()=>{
            const { nickname, name, birthday, tel, address } = this.state.data;
            if(nickname&&name&&birthday&&tel&&address){
                this.setState({
                    submit : true
                })
            }
        })
    }
    render() {
        // const { path } = this.props.match;
        const { submit } = this.state;
        return (
            <div className="person-info">
                <h4 className="title">个人信息</h4>
                <PictureUpload />
                <div className="person-info-form">
                    <Nickname callback={ this.getData }/>
                    <Name callback={ this.getData }/>
                    <Birthday callback={ this.getData }/>
                    <Gender callback={ this.getData }/>
                    <Tel callback={ this.getData }/>
                    <Address callback={ this.getData } />
                    <button className={ submit?null:"disable" }>保存</button>
                </div>
                {/* <Route path={ `${ path }/signIn` } component={ SignIn } /> */}
            </div>
        );
    }
}
