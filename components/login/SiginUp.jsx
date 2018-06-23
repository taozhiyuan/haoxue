import React, { Component } from 'react'
import Layout from './Layout'
import UserName from './input/UserName'
import Password from './input/Password'
import RepeatPassword from './input/RepeatPassword'
import MsgCode from './input/MsgCode'
import Protocol from './input/Protocol'
import Success from './Success'
import Agreement from './Agreement'
import axios from '../../global/axios'

export default class SiginUp extends Component {
    state = {
        active : 0,
        msg : null,
        data : {
            user_name : null,
            msg_code : null,
            password : null,
            repeatPassword : null,
            protocol : false
        },
        submit : false,
        success : false, //注册是否成功
        agreement : false
    }
    switech = (parame) => {
        this.setState({ active : parame })
    }
    getDate = (parame) => {
        const { data } = this.state;
        this.setState({ data : {...data, ...parame} })
    }
    getMsg = (parame) => {
        this.setState({ msg : parame })
    }
    getAgreement = (parame) => {
        this.setState({ agreement : parame })
    }
    verifica = () => {
        const { data } = this.state;
        switch ( true ) {
            case !data.user_name :
                this.setState({ msg : "请输入正确的用户名" })
                break;
            case !data.msg_code :
                this.setState({ msg : "请输入正确的验证码" })
                break;
            case !data.password :
                this.setState({ msg : "您输入5位以上的密码" })
                break;
            case !data.repeatPassword :
                this.setState({ msg : " 两次密码不一致" })
                break;
            case !data.protocol :
                this.setState({ msg : "您未阅读并同意用户协议" })
                break;
            default:
                this.setState({ msg : null, submit : true })
                this.submit()
        }
    }
    submit = () => {
        const { data } = this.state;
        axios.SMSVerification({ // 匹配短信验证码
            smsCode : data.msg_code
        }).then((res)=>{
            if(res.data.code === "0"){
                axios.UserRegist({ // 注册
                    loginUser : data.user_name,
                    userName : null,
                    password : data.password
                }).then((res)=>{
                    if(res.data.code === "0"){
                        this.setState({ success : true }) // 设置注册成功状态
                    }else{
                        this.setState({ msg : res.data.msg }) // 设置报错
                    }
                }).catch((err)=>{
                    this.setState({ msg : err.respones.msg || "注册失败" })// 设置报错
                })
            }else{
                this.setState({ msg : res.data.msg })// 设置报错
            }
        }).catch((err)=>{
            this.setState({ msg : '验证码不匹配' })// 设置报错
        })
    }
    render(){
        const { msg, data, success, agreement } = this.state;
        const { setVisibi } = this.props;
        if(agreement){
            return(
                <Layout 
                    name="注册"
                    winName="login"
                    setVisibi={ setVisibi }
                >
                    <Agreement 
                        getAgreement={ this.getAgreement }
                    />
                </Layout>
            )
        }
        return(
            <Layout 
                name="注册"
                winName="login"
                setVisibi={ setVisibi }
            >
                { success ? <Success data="注册成功" /> : 
                    <>
                        <UserName 
                            callback={ this.getDate } 
                            getMsg={ this.getMsg }
                        />
                        <MsgCode 
                            callback={ this.getDate } 
                            mobile={ data.user_name } 
                        />
                        <Password callback={ this.getDate } />
                        <RepeatPassword callback={ this.getDate } />
                        <Protocol 
                            callback={ this.getDate } 
                            getAgreement={ this.getAgreement } 
                        />
                        <h6> { msg } </h6>
                        <button
                            onClick={ this.verifica }
                        >立即注册</button>
                    </>
                }
                <style jsx>{`
                    h6 {
                        line-height : 40px;
                        height : 40px;
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
