
// 性别
import React, { Component } from 'react';

export default class Gender extends Component {
    constructor(){
        super()
        this.state = {
            male : true,
            female : false,
        }
    }
    getSexMale = (e) => {
        this.setState({
            male : true,
            female : false
        })
        this.props.callback({
            male : true,
            female : false
        });
    }
    getSexFemale = (e) => {
        this.setState({
            male : false,
            female : true
        })
        this.props.callback({
            male : false,
            female : true
        });
    }
    componentDidMount(){
        this.props.callback(...this.state);
    }
    render() {
        const { female, male } = this.state;
        return (
            <div className="gender">
                <label>性&emsp;&emsp;别：</label>
                <input type="radio" id="male" name="gender" value="male"
                    checked={ male }
                    onChange={ this.getSexMale }
                /><label htmlFor="male">男</label>
                <input type="radio" id="female" name="gender" value="female"
                    checked={ female }
                    onChange={ this.getSexFemale }
                /><label htmlFor="female">女</label>
            </div>
        );
    }
}
