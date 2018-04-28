
// 用户注册
import React, { Component } from 'react';
import SignUpSuccess from './SignUpSuccess.jsx';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Tel from './input/Tel.jsx';
import Verification from './input/SMS_Verification.jsx';
import Nickname from './input/Nickname.jsx';
import Password from './input/Password.jsx';
import RepeatPassword from './input/RepeatPassword.jsx';
import './UserEntry.css';

import Axios from '../../request/axiosHome.js';

export default class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            data : {
                nickname : null,
                tel : null,
                verific : null,
                password : null,
                repeatPassword : null,
            },
            submit: false
        }
    }
    getData = (param) => {
        // console.log(param)
        this.setState({
            data : { ...this.state.data, ...param }
        },()=>{
            const { nickname, verific, password, tel, repeatPassword } = this.state.data;
            if(nickname&&tel&&password&&repeatPassword,verific){
                this.setState({
                    submit : true
                })
                console.log('可以注册了')
            }
        })
    }
    SignUpSubmit = () => {
        Axios.UserRegist({
            loginUser : this.state.data.tel,
            userName : this.state.data.nickname,
            password : this.state.data.password,
        }).then((res)=>{
            console.log(res)
        })
    }
    render() {
        const { path, url } = this.props.match;
        // console.log(this.state.data.tel)
        return (
            <Switch>
                {/* <Redirect to="/userEntry/signIn" /> */}
                <Route path={ `${ path }/signUpSuccess` } component={ SignUpSuccess } />
                <Route path={ path } render={ ()=>(
                    <div className="sign-up">
                        <h3>用户注册</h3>
                        <Tel callback={ this.getData } />
                        <Verification 
                            callback={ this.getData }
                            tel={ this.state.data.tel }
                        />
                        <Nickname callback={ this.getData } />
                        <Password callback={ this.getData } place="设置6至16位字符的密码" />
                        <RepeatPassword callback={ this.getData } password={ this.state.data.password }/>
                        { this.state.submit 
                            ? <Link to={ `${url}/signUpSuccess` }>
                                    <button onClick={ this.SignUpSubmit }>注&emsp;册</button>
                                </Link>
                            : <button className="disable">注&emsp;册</button>
                        }
                        
                        <footer>
                            <Link to="/userEntry/forgetPassword">忘记密码</Link>
                            <Link to="/userEntry/signIn">立即登录</Link>
                        </footer>
                    </div>
                ) } />
            </Switch>
        )
    }
}
