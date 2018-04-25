
// 会员名称
import React, { Component } from 'react';

export default class Name extends Component {
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
        const value = this.trim(e.target.value);
        this.setState({
            value : value,
            visibi : true
        })
        if( value.length > 1 ){ 
            this.setState({judge : true})
            this.props.callback({ name:value }) 
        }else{ 
            this.setState({judge : false})
            this.props.callback({ name:"" })
        }
    }
    render() {
        const { value, judge, visibi } = this.state;
        
        return (
            <div className="name">
                <label>真实姓名：</label>
                <input type="text" placeholder="例如：张三" name="name" maxLength="15"
                    value={ value }
                    onChange={ this.getDate }
                />
                {visibi && <i className={ judge ? "ion-ios-checkmark-outline":"ion-ios-close-outline" } />}
            </div>
        );
    }
}
