
// 出生年月：
import React, { Component } from 'react';

export default class Birthday extends Component {
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
        const match = value.match(/^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
        if( value.length > 2 && match ){ 
            this.setState({judge : true})
            this.props.callback({ birthday:value })
        }else{ 
            this.setState({judge : false})
            this.props.callback({ birthday:"" })
        }
    }
    render() {
        const { value, judge, visibi } = this.state;
        return (
            <div className="birthday">
                <label>出生年月：</label>
                <input type="text" placeholder="例如：1992-10-15" name="birthday" maxLength="10"
                    value={ value }
                    onChange={ this.getDate }
                />
                {visibi && <i className={ judge ? "ion-ios-checkmark-outline":"ion-ios-close-outline" } />}
            </div>
        );
    }
}
