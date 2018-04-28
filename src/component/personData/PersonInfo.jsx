
// 个人信息
import React, { Component } from 'react';
import Nickname from './input/Nickname.jsx';
import Name from './input/Name.jsx';
import Birthday from './input/Birthday.jsx';
import Gender from './input/Gender.jsx';
import Tel from './input/Tel.jsx';
import Address from './input/Address.jsx';
import PictureUpload from './input/PictureUpload.jsx';
import './PersonInfo.css';

import Axios from '../../request/axiosHome.js';
// import { Route, Switch } from "react-router-dom";

export default class PersonInfo extends Component {
    constructor(){
        super()
        this.state = {
            data : null,
            submit : false
        }
    }
    componentWillMount(){
        Axios.queryInfo({
            access_token : sessionStorage.getItem("access_token")
        }).then((res)=>{
            this.setState({
                data : res.data.result
            })
        })
        
    }
    getData = (param) => {
        this.setState({
            data : { ...this.state.data,...param },
            submit: true
        })
    }
    InfoSubmit = () => {
        Axios.PerfectInfo({
            access_token : sessionStorage.getItem("access_token"),
            ...this.state.data
        }).then((res)=>{
            console.log(res.data.result)
        })
    }
    render() {
        // const { path } = this.props.match;
        const { submit, data } = this.state;
        if(!data){ return false }
        return (
            <div className="person-info">
                <h4 className="title">个人信息</h4>
                <PictureUpload data={ data.photoOsskey }/>
                <div className="person-info-form">
                    {/* <Nickname callback={ this.getData } data={ data. } /> */}
                    <Name callback={ this.getData } data={ data.trueName } />
                    <Birthday callback={ this.getData } data={ data.born } />
                    <Gender callback={ this.getData } data={ data.userSex } />
                    <Tel callback={ this.getData } data={ data.mobile } />
                    <Address callback={ this.getData } data={ data.userHomeAddress } />
                    <button 
                        className={ submit?null:"disable" }
                        onClick={ this.InfoSubmit }>保存</button>
                </div>
                {/* <Route path={ `${ path }/signIn` } component={ SignIn } /> */}
            </div>
        );
    }
}
