import React, { Component } from 'react'
import axios from '../../../global/axios';

export default class MsgCode extends Component {
    myRef = React.createRef()
    state = {
        value : "",
        disable : false,
        btnText : "发送验证码",
        number : 60
    }
    trim = (str) => {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    getValue = (event) => {
        const value = this.trim( event.target.value );
        this.setState({
            value : value
        })
        // const match = value.match(/^1[3|4|5|8][0-9]\d{4,8}$/);
        if( value.length > 5 ){
            this.props.callback({ msg_code : value })
        }else{
            this.props.callback({ msg_code : null })
        }
    }
    CountDown = () => {  //获取手机验证码
        if(this.state.number !== 60){ return false } //如果倒计时没有归位
        if(!this.props.mobile ){ return false; } //如果没有输入手机
        const mobile = setInterval(()=>{
            this.setState({
                number : this.state.number-1, // 倒计时减1
                btnText : `${this.state.number} 秒`, //按钮的文本
                disable : true //设置验证码按钮状态
            })
            if(this.state.number === 0){
                clearInterval(mobile); //清除定时器
                this.setState({
                    number : 60,
                    btnText : "重新发送"
                })
                if(this.props.mobile){
                    this.setState({ disable : false }) //设置验证码按钮状态
                }
            }
        },1000)
        axios.getMobileCode({ //获取验证码
            mobile : this.props.mobile  //传入手机号
        }).then((res)=>{
            console.log('发送短信成功')
            this.myRef.current.focus();
        })
    }
    render(){
        const { value, disable, btnText } = this.state;
        return(
            <div>
                <input type="text" placeholder="请输入验证码" maxLength="6" 
                    value={ value } 
                    onChange={ this.getValue }
                    ref={ this.myRef }
                />
                <span 
                    onClick={ this.CountDown }
                    className={ disable ? "disable": null }
                >{ btnText }</span>
                <style jsx>{`
                    div {
                        margin-top : 20px;
                        text-align : left;
                    }
                        input {
                            width : 170px;
                            line-height : 30px;
                            font-size : 14px;
                            border-bottom : 1px solid #eee;
                        }
                        span {
                            color : #f5a00a;
                            cursor : pointer;
                            font-size : 14px;
                            display: inline-block;
                            border-left : 1px solid #eee;
                            line-height : 20px;
                            margin-left : 20px;
                            padding-left : 20px;
                        }
                        span.disable {
                            color : #999;
                            cursor : not-allowed;
                        }
                `}</style>
            </div>
        )
    }
}
