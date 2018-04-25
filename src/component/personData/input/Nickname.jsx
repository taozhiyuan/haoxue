
// 会员名称
import React, { Component } from 'react';

export default class Nickname extends Component {
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
            this.props.callback({ nickname:value })
        }else{ 
            this.setState({judge : false})
            this.props.callback({ nickname:"" })
        }
    }
    render() {
        const { value, judge, visibi } = this.state;
        
        return (
            <div className="nickname">
                <label>会员名称：</label>
                <input type="text" placeholder="例如：小默默" name="nickname" maxLength="15"
                    value={ value }
                    onChange={ this.getDate }
                />
                {visibi && <i className={ judge ? "ion-ios-checkmark-outline":"ion-ios-close-outline" } />}
            </div>
        );
    }
}
