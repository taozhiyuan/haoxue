import React, { Component } from 'react'
import axios from '../../../global/axios';

export default class UserName extends Component {
    state = {
        value : ""
    }
    trim = (str) => {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    getValue = (event) => {
        const value = this.trim( event.target.value );
        this.setState({
            value : value
        })
        const match = value.match(/^1[3|4|5|8][0-9]\d{4,8}$/);
        if( value.length > 10 && match ){
            axios.VerificationMobile({ loginUser : value }).then((res)=>{
                if(res.data.code === "1"){
                    this.props.getMsg(res.data.msg)
                }else{
                    this.props.getMsg(null)
                    this.props.callback({ user_name : value })
                }
            })
        }else{
            this.props.callback({ user_name : null })
        }
    }
    render(){
        const { value } = this.state;
        return(
            <div>
                <input type="tel" placeholder="请输入您的手机号码" maxLength="11"
                    value={ value } 
                    onChange={ this.getValue }
                />
                <style jsx>{`
                    div {
                        margin-top : 20px;
                    }
                        input {
                            width : 100%;
                            line-height : 30px;
                            font-size : 14px;
                            border-bottom : 1px solid #eee;
                        }
                `}</style>
            </div>
        )
    }
}
