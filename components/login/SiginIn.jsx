import React, { Component } from 'react'
import Link from 'next/link'
import Layout from './Layout'
import UserName from './input/SignUserName'
import Password from './input/Password'
import ChartCode from './input/ChartCode'
import Success from './Success'
import Axios from '../../global/axios';
import { setAuth } from '../../global/axiosPublic';

export default class SiginIn extends Component {
    state = {
        active : 0,
        type : ['个人', '机构'],
        msg : null,
        success : false, //登录是否成功
        data : {}
    }
    switech = (parame) => { //切换active
        this.setState({ active : parame })
    }
    getDate = (parame) => { //获取数据
        const { data } = this.state;
        this.setState({ data : {...data, ...parame} })
    }
    verifica = () => { // 提交数据并登录
        const { data } = this.state;
        switch ( true ) {
            case !data.user_name :
                this.setState({ msg : "请输入正确的用户名" })
                break;
            case !data.password :
                this.setState({ msg : "您输入5位以上的密码" })
                break;
            case !data.chart_code :
                this.setState({ msg : "请输入正确的验证码" })
                break;
            default:
                this.setState({ msg : null })
                this.submit()
        }
    }
    submit = () => {
        const { data } = this.state;
        Axios.SignIn({
            username : data.user_name,
            password : data.password,
            imageCode : data.chart_code,
            deviceId : window.returnCitySN["cip"],
            hxjAuth : "Basic aHh3Omh4d1NlY3JldA=="
        }).then(res => {
            if(res.data.access_token){
                this.setState({ success : true })
                sessionStorage.setItem( "token", res.data.access_token )
                this.props.setVisibi('siginSucess')
                setAuth( res.data.access_token )
            }else{
                if(res.data === "坏的凭证"){
                    this.setState({ msg : "密码错误" })
                }else{
                    this.setState({ msg : res.data })
                }
            }
        }).catch((err)=>{
            console.log('err'+err)
        })
    }
    SwitechToSignUp = () => {
        this.props.setVisibi('sigin')
        setTimeout(()=>{
            this.props.setVisibi('login')
        },100)
    }
    render(){
        const { active, msg, type, success } = this.state;
        const { setVisibi } = this.props;
        return(
            <Layout 
                name="登录"
                winName="sigin"
                setVisibi={ setVisibi }
            >
                { success ? <Success data="登录成功" /> : <>
                    <ul>
                        { type.map((item, index)=>(
                            <li 
                                onClick={ ()=>{ this.switech(index) } } 
                                key={ index }
                                className={ active === index ? "active" : null }
                            >{ item }</li>
                        )) }
                    </ul>
                    <UserName callback={ this.getDate } />
                    <Password callback={ this.getDate } />
                    <ChartCode callback={ this.getDate } />
                    <h6> { msg } </h6>
                    <button
                        onClick={ this.verifica }
                    >立即登录</button>
                    <h5>{ active ? <Link href="/organHome"><a>免费申请入驻</a></Link> : 
                        <span onClick={ this.SwitechToSignUp }>还没有账号？立即注册</span> 
                    }</h5>
                </>}
                <style jsx>{`
                    ul {
                        overflow : hidden;
                        text-align : center;
                    }
                        ul > li:first-child {
                            margin-right : 40px;
                        }
                        li {
                            display: inline-block;
                            width : 40px;
                            line-height : 40px;
                            font-size : 16px;
                            color : #666;
                            cursor : pointer;
                        }
                        li.active {
                            color : #f5a00a;
                            position : relative;
                        }
                        li.active::after {
                            content : "";
                            position : absolute;
                            left : 0px;
                            bottom : 0px;
                            width : 100%;
                            height : 3px;
                            background-color : #f5a00a;
                        }
                        h6 {
                            line-height : 50px;
                            height : 50px;
                            text-align : center;
                            color : red;
                        }
                        button {
                            width : 240px;
                            height : 38px;
                            border-radius : 19px;
                            color : #FFF;
                            font-size : 14px;
                            background-color : #f5a00a;
                        }
                        h5 {
                            color : #f5a00a;
                            padding-top : 20px;
                            cursor : pointer;
                        }
                `}</style>
            </Layout>
        )
    }
}