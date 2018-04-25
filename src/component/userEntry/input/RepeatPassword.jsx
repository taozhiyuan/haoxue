
// 重复密码
import React, { Component } from 'react';

export default class RepeatPassword extends Component {
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
        // const match = value.match(/^1[3|4|5|8][0-9]\d{4,8}$/);
        if( value === this.props.password ){ 
            this.setState({judge : true}) 
            this.props.callback({ repeatPassword : value })
        }else{ 
            this.setState({judge : false}) 
            this.props.callback({ repeatPassword : null })
            console.log('第二次密码不匹配')
        }
    }
    render() {
        const { value, judge, visibi } = this.state;
        return (
            <h5 className="password">
                <i className="ion-ios-locked-outline"></i>
                <input type="password" placeholder="请再次输入密码" maxLength="11" 
                    value={ value }
                    onChange={ this.getDate }
                />
                {visibi && <i className={ judge ? "ion-ios-checkmark-outline":"ion-ios-close-outline" } />}
            </h5>
        );
    }
}
