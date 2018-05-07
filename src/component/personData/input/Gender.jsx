
// 性别
import React, { Component } from 'react';

export default class Gender extends Component {
    constructor(){
        super()
        this.state = {
            userSex : true
        }
    }
    componentWillMount(){
        this.setState({
            userSex : this.props.data
        })
    }
    getSexMale = (e) => {
        this.setState({
            userSex : true
        })
        this.props.callback( {userSex : true} );
    }
    getSexFemale = (e) => {
        this.setState({
            userSex : false
        })
        this.props.callback( {userSex : false} );
    }
    render() {
        const { userSex } = this.state;
        return (
            <div className="gender">
                <label>性&emsp;&emsp;别：</label>
                <input type="radio" id="male" name="gender" value="male"
                    checked={ userSex?true:false }
                    onChange={ this.getSexMale }
                /><label htmlFor="male">男</label>
                <input type="radio" id="female" name="gender" value="female"
                    checked={ userSex?false:true }
                    onChange={ this.getSexFemale }
                /><label htmlFor="female">女</label>
            </div>
        );
    }
}
