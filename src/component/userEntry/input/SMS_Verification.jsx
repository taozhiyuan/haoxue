
// 验证码
import React, { Component } from 'react';
import Axios from '../../../global/axios.js';

export default class Verification extends Component {
    constructor(){
        super()
        this.myRef = React.createRef();
        this.state = {
            value : "",
            judge : false,
            visibi : false,
            btnText : "发送验证码",
            number : 60
        }
    }
    componentWillReceiveProps(nextProp){
        if(nextProp.tel && this.state.number === 60){
            this.setState({ judge : true }) //设置验证码按钮状态
        }
    }
    trim = (str) => {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    getDate = (e) => { //获取表单值
        const value = this.trim( e.target.value );
        this.setState({
            value : value,
            visibi : true
        })
        if( value.length === 6 && this.props.tel ){
            this.props.callback({ verific : value }) //回传验证码
        }
    }
    CountDown = () => {  //获取手机验证码
        if(this.state.number !== 60){ return false } //如果倒计时没有归位
        if(!this.props.tel ){ return false; } //如果没有输入手机
        const mobile = setInterval(()=>{
            this.setState({
                number : this.state.number-1, // 倒计时减1
                btnText : `倒计时 ${this.state.number} 秒`, //按钮的文本
                judge : false //设置验证码按钮状态
            })
            if(this.state.number === 0){
                clearInterval(mobile); //清除定时器
                this.setState({
                    number : 60,
                    btnText : "重新发送"
                })
                if(this.props.tel){
                    this.setState({ judge : true }) //设置验证码按钮状态
                }
            }
        },1000)
        Axios.getMobileCode({ //获取验证码
            mobile : this.props.tel  //传入手机号
        }).then((res)=>{
            console.log('发送短信成功')
            this.myRef.current.focus();
        }).catch((err)=>{
            console.log(err)
        });
    }
    render() {
        const { value, judge, visibi, btnText } = this.state;
        return (
            <h5 className="mobile">
                <i className="ion-ios-email-outline"></i>
                <input type="number" placeholder="输入验证码" name="verification" maxLength="6" 
                    value={ value }
                    onChange={ this.getDate }
                    ref={ this.myRef }
                />
                <span 
                    onClick={ this.CountDown }
                    className={ judge?null:"disable" }
                >{ btnText }</span>
                {visibi && <i className={ judge ? "ion-ios-checkmark-outline":"ion-ios-close-outline" } />}
            </h5>
        );
    }
}
