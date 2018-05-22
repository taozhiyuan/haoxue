
// 家庭地址：
import React, { Component } from 'react';

export default class Address extends Component {
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
        const value = this.trim(e.target.value);
        this.setState({
            value : value,
            visibi : true
        })
        if( value.length > 4 ){ 
            this.setState({judge : true})
            this.props.callback({ userHomeAddress: value },true)
        }else{ 
            this.setState({judge : false})
            this.props.callback({ userHomeAddress: "" },false)
        }
    }
    render() {
        const { value, judge, visibi } = this.state;
        return (
            <div className="address">
                <label>家庭地址：</label>
                <input type="text" placeholder="例如：长沙市岳麓区文川路28号" name="address" maxLength="25"
                    value={ value }
                    onChange={ this.getDate }
                />
                {visibi && <i className={ judge ? "ion-ios-checkmark-outline":"ion-ios-close-outline" } />}
            </div>
        );
    }
}
