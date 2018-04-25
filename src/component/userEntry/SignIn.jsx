
// 用户登录
import React, { Component } from 'react';
import Password from './input/Password.jsx';
import Tel from './input/Tel.jsx';
import Verification from './input/Graphic_Verification.jsx';
import './UserEntry.css';
import { Link } from "react-router-dom";

export default class SignIn extends Component {
    constructor(){
        super()
        this.state = {
            data : {
                tel : null,
                verific : null,
                password : null,
            },
            submit: false
        }
    }
    getData = (param) => {
        console.log(param)
        this.setState({
            data : { ...this.state.data, ...param }
        },()=>{
            const { nickname, verific, password, tel, repeatPassword } = this.state.data;
            if(nickname&&tel&&verific&&password&&repeatPassword){
                this.setState({
                    submit : true
                })
                console.log('可以注册了')
            }
        })
    }
    storage = () => {
        sessionStorage.setItem("nickname", this.state.tel);
    }
    render() {
        const { path, url } = this.props.match;
        return (
            <div className="sign-in">
                <h3>用户登录</h3>
                <Tel callback={ this.getData } />
                <Password callback={ this.getData } place="请输入您的密码" />
                <Verification callback={ this.getData } tel={ this.state.data.tel }/>
                { this.state.submit 
                    ? <Link to="/personData/personInfo"
                            onClick = { this.storage }
                        >
                            <button>登&emsp;录</button>
                        </Link>
                    : <button className="disable">登&emsp;录</button>
                }
                {/* <Link to="/personData/personInfo"><button>登&emsp;录</button></Link> */}
                <footer>
                    <Link to="/userEntry/forgetPassword">忘记密码</Link>
                    <Link to="/userEntry/signUp">立即注册</Link>
                </footer>
            </div>
        );
    }
}
