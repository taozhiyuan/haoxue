
// 会员名称
import React, { Component } from 'react';
import Axios from '../../../global/axios.js';

export default class Tel extends Component {
    constructor(){
        super()
        this.state = {
            value : "",
            judge : false,
            visibi : false
        }
    }
    trim = (str) => {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    getDate = (e) => {
        const value = this.trim( e.target.value );
        this.setState({
            value : value,
            visibi : true
        })
        const match = value.match(/^[1][3,4,5,7,8][0-9]{9}$/);
        if( value.length > 10 && match ){
            Axios.VerificationMobile({ loginUser : value }).then((res)=>{
                // console.log(res)
                if(res.data.code === "0"){
                    this.setState({judge : true}) 
                    this.props.callback({ tel : value })
                    console.log("未重复")
                }else if(res.data.code === "1"){
                    this.setState({judge : false}) 
                    this.props.callback({ tel : null })
                    console.log("已被注册")
                }else{
                    this.setState({judge : false}) 
                    this.props.callback({ tel : null })
                    console.log('未知错误')
                }
            })
        }else{ 
            this.setState({judge : false}) 
        }
    }
    render() {
        const { value, judge, visibi } = this.state;
        return (
            <h5 className="user-name">
                <i className="ion-iphone"></i>
                <input type="text" placeholder="例如：139******32" name="tel" maxLength="11"
                    value={ value }
                    onChange={ this.getDate }
                />
                {visibi && <i className={ judge ? "ion-ios-checkmark-outline":"ion-ios-close-outline" } />}
            </h5>
        );
    }
}
