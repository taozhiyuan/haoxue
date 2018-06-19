import React, { Component } from 'react'

export default class RepeatPassword extends Component {
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
        // const match = value.match(/^1[3|4|5|8][0-9]\d{4,8}$/);
        if( value.length > 5 ){
            this.props.callback({ repeatPassword : value })
        }else{
            this.props.callback({ repeatPassword : null })
        }
    }
    render(){
        const { value } = this.state;
        return(
            <div>
                <input type="password" placeholder="请再次输入密码" maxLength="11" 
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
