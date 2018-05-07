
// 会员名称
import React, { Component } from 'react';

export default class Tel extends Component {
    constructor(){
        super()
        this.state = {
            value : "",
            judge : false,
            visibi : false
        }
    }
    componentWillMount(){
        this.setState({
            value : this.props.data || ""
        })
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
        const match = value.match(/^1[3|4|5|8][0-9]\d{4,8}$/);
        if( value.length > 10 && match ){ 
            this.setState({judge : true}) 
            this.props.callback({ mobile: value })
        }else{ 
            this.setState({judge : false}) 
            this.props.callback({ mobile: "" })
        }
    }
    render() {
        const { value, judge, visibi } = this.state;
        return (
            <div className="tel">
                <label>手机号码：</label>
                <input type="number" placeholder="例如：139******32" name="tel" maxLength="11" disabled={true}
                    value={ value }
                    onChange={ this.getDate }
                />
                {visibi && <i className={ judge ? "ion-ios-checkmark-outline":"ion-ios-close-outline" } />}
            </div>
        );
    }
}
