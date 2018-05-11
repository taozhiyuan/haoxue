
// 个人信息
import React, { Component } from 'react';
import Name from './input/Name.jsx';
import Birthday from './input/Birthday.jsx';
import Gender from './input/Gender.jsx';
import Tel from './input/Tel.jsx';
import Address from './input/Address.jsx';
import PictureUpload from './input/PictureUpload.jsx';
import Popup from '../public/Popup.jsx';
import './PersonInfo.css';

import Axios, { ImportToken } from '../../global/axios.js';
// import { Route, Switch } from "react-router-dom";

export default class PersonInfo extends Component {
    constructor(){
        super()
        this.state = {
            data : null,
            submit : false,
            popup : false,
            token : sessionStorage.getItem("access_token")
        }
    }
    componentWillMount(){
        Axios.queryInfo({
            access_token : this.state.token
        }).then((res)=>{
            this.setState({
                data : res.data.result
            })
            // console.log(res)
        }).catch((err)=>{
            console.log(err)
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
            access_token : this.state.token,
            ...this.state.data
        }).then((res)=>{
            // console.log(res)
            if(res.status === 200){
                this.setState({ 
                    popupText : '提交成功',
                    PopupState : true
                })
            }else{
                this.setState({ 
                    popupText : '出问题了',
                    PopupState : false
                })
            }
            this.setState({ 
                popup : true
            })
            setTimeout(()=>{
                this.setState({ popup : false })
            },1000)
        })
    }
    render() {
        // const { path } = this.props.match;
        const { submit, data, popup, popupText, PopupState } = this.state;
        if(!data){ return false }
        return (
            <div className="person-info">
                <h4 className="title">个人信息</h4>
                <PictureUpload callback={ this.getData } data={ data.photoOsskey } />
                <div className="person-info-form">
                    <Name callback={ this.getData } data={ data.trueName } />
                    <Birthday callback={ this.getData } data={ data.born } />
                    <Gender callback={ this.getData } data={ data.userSex } />
                    <Tel callback={ this.getData } data={ data.mobile } />
                    <Address callback={ this.getData } data={ data.userHomeAddress } />
                    { submit ? <button onClick={ this.InfoSubmit }>保存</button>:
                                <button className="disable">保存</button>
                    }
                </div>
                { popup && <Popup state={PopupState}>{ popupText }</Popup> }
            </div>
        );
    }
}
