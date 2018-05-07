
// 验证码
import React, { Component } from 'react';
import Axios from '../../../request/axiosHome.js';

export default class Verification extends Component {
    constructor(){
        super()
        this.state = {
            value : "",
            judge : false,
            visibi : false,
            btnText : "发送验证码",
            number : 30
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
        // const match = value.match(/^1[3|4|5|8][0-9]\d{4,8}$/);
        if( value.length === 6 && this.props.tel ){
            // Axios.VerifyingSMS({ smsCode : value }).then((res)=>{ //异步验证输入的验证码
            //     console.log(res)
                this.setState({ judge : true }) //设置注册按钮状态
                this.props.callback({ verific : value }) //回传验证码
            // })
        }else{
            this.setState({judge : false}) 
            this.props.callback({ verific : null })
        }
    }
    CountDown = () => {
        console.log(this.props.tel)
        if(this.state.number !== 30){ console.log('操作频繁'); return false; }
        if(!this.props.tel ){ console.log('请输入手机'); return false; }
        Axios.getMobileCode({ //获取验证码
            mobile : this.props.tel  //传入手机号
        }).then((res)=>{
            console.log(res)
            const mobile = setInterval(()=>{
                this.setState({
                    number : this.state.number-1,
                    btnText : `倒计时 ${this.state.number} 秒`
                })
                if(this.state.number===0){
                    clearInterval(mobile);
                    this.setState({
                        number : 30,
                        btnText : "重新发送"
                    })
                }
            },1000)
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
                />
                <span onClick={ this.CountDown }>{ btnText }</span>
                {visibi && <i className={ judge ? "ion-ios-checkmark-outline":"ion-ios-close-outline" } />}
            </h5>
        );
    }
}
