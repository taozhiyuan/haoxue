import React, { Component } from 'react'

export default class Protocol extends Component {
    state = {
        check : false
    }
    check = () => {
        this.setState({ check : !this.state.check })
        this.props.callback({ protocol : !this.state.check })
    }
    render(){
        const { check } = this.state;
        return(
            <div>
                <input type="checkbox" id="protocol" value="" checked={ check }
                    onClick={ this.check }
                />
                <label htmlFor="protocol">我已阅读并同意</label>
                <span onClick={ 
                    ()=>{ this.props.getAgreement(true) } //弹出协议书
                }>《好学家用户注册协议》</span>
                <style jsx>{`
                    div {
                        margin-top : 20px;
                        text-align : left;
                    }
                        input {
                            margin-right : 10px;
                        }
                        label {
                            color : #999;
                            font-size : 12px;
                        }
                            span {
                                color : #f5a00a;
                                cursor : pointer;
                                font-size : 12px;
                            }
                `}</style>
            </div>
        )
    }
}
