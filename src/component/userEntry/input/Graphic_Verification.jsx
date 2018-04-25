
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
            number : 30,
            // refresh : false,
            refresh : "http://120.79.247.254:1111/hxj-base-ui/code/image?width=90&height=36"
        }
    }
    componentWillMount(){
        Axios.getMobileCode().then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        });
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
        if( value.length === 6 ){
            Axios.getGraphicCode().then((res)=>{
                this.setState({judge : true})
                this.props.callback({ verific : value })
            }).catch((err)=>{
                console.log(err)
            });
        }else{
            this.setState({judge : false}) 
            this.props.callback({ verific : null })
        }
    }
    refresh = () => {
        this.setState({ refresh : `http://120.79.247.254:1111/hxj-base-ui/code/image?width=90&height=36#${Math.floor((Math.random()*10)+1)}` })
    }
    render() {
        const { value, judge, visibi, btnText } = this.state;
        return (
            <h5 className="graphical">
                <i></i>
                <input type="text" placeholder="输入验证码" maxLength="6" 
                    value={ value }
                    onChange={ this.getDate }
                />
                <span><img src={ this.state.refresh } alt=""/></span>
                <a href="javascript:void(0);" onClick={ this.refresh }>看不清 ？换一张</a>
                {visibi && <i className={ judge ? "ion-ios-checkmark-outline":"ion-ios-close-outline" } />}
            </h5>
        );
    }
}
