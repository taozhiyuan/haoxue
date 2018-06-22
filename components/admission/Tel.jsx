// 所有机入页面的UI组件放在这里
import { Component } from 'react'
import Axios from '../../global/orgRequests';
import Request from '../../global/axios'

export default class Tel extends Component {
    state = {
        telNumber: '',
        code: '',
        telNumberAvailable: true,
        getCode: false,
        button: '发送验证码',
        codePass: true
    }

    postState = () => {
        setTimeout(() => {
            this.props.callback(this.state)
        }, 0)
    }

    isPhoneAvailable = num => {
        let reg = /^[1][3,4,5,7,8][0-9]{9}$/
        if (reg.test(num)) {
            return true
        }else {
            return false
        }
    }

    handleChange = event => {
       if (this.isPhoneAvailable(event.target.value)) {
           this.setState({loginUser: event.target.value})
           this.setState({telNumberAvailable: true})
           this.setState({getCode: true})
       } else {
           this.setState({loginUser: ''})
           this.setState({telNumberAvailable: false})
           this.setState({getCode: false})
       }
       this.postState()
    }

    codeChange = event => {
        let _this = this
        if (event.target.value.length == 6) {
            this.setState({code: event.target.value, codePass: true})
            alert('验证码验证中，请稍后……')
            Request.SMSVerification({
                smsCode: event.target.value
            }).then(res => {
                if (res.data.code == 0) {
                    alert('验证码正确')
                    _this.setState({codePass: true})
                }else {
                    alert('验证码不正确')
                    _this.setState({codePass: false})
                }
            })
            this.postState()
        }else {
            this.setState({codePass: false})
            return
        }      
    }

    getCode = () => {
        let tel = this.state.loginUser

        if (!this.state.getCode) {
            return
        }

        Request.getMobileCode({ //获取验证码
            mobile : tel  //传入手机号
        }).then((res)=>{
            let timer, second = 60
            if (res.status == 200) {
                if (this.state.getCode) {
                    this.setState({getCode: false})
                }
                timer = setInterval(() => {
                    if (second > 0) {
                        second--
                        this.setState({button: `${second}秒后重新发送`})
                    }else {
                        second = 0
                        this.setState({button: '发送验证码', getCode: true})
                        clearInterval(timer)
                    }
                }, 1000)
            }
        })
    }

    render () {
        return (           
            <div className="card">
                <style jsx>{`
                    .title {
                        font-size: 14px;
                    }
                    .card {
                        font-size: 12px;
                    }
                    .card input {
                        border: 1px solid #ddd;
                        padding: 8px;
                        margin: 30px 20px;
                    }
                    .title-box {
                        border-bottom: 1px solid #ddd;
                        width: 1140px;
                        margin: 0 auto 28px auto;
                    }
                    .title-box:before {
                        display: table;
                        content: '';
                    }
                    .title {
                        margin: 42px 0 20px 0;
                    }
                    .card>div>span {
                        width: 120px;
                        display: inline-block;
                        text-align: right;
                    }
                    .card>div>span.hidden {
                        display: none;
                    }
                    .get-code, .cant-get {
                        width: 100px;
                        height: 30px;
                        border-radius: 3px;
                    }
                    .get-code {                       
                        background-color: #f5a00a;
                        color: #fff;
                    }
                    .cant-get {
                        background-color: #eee;
                        color: #aaa;
                    }
                    .hidden {
                        display: none;
                    }
                    img {
                        display: inline-block;
                        width: 14px;
                        height: 14px;
                        vertical-align: middle;
                        margin-right: 6px;
                    }
                    .card>div>span:last-child {
                        color: red;
                    }
                `}</style>
                <div className="title-box">
                    <p className="title">登录账号</p>
                </div>           
                <div>
                    <span>注册人手机号</span>
                    <input type="text" placeholder="填写手机号" onChange={ this.handleChange } maxLength='11'/>
                    <span className={this.state.telNumberAvailable ? 'hidden' : ''}><img src="/static/img/public/warning.png" alt=""/>手机号格式有误</span>
                </div>
                <div>
                    <span>验证信息</span>
                    <input type="text" placeholder="验证码" onChange={ this.codeChange }/>
                    <button className={ this.state.getCode ? 'get-code' : 'cant-get' } onClick={ this.getCode }>{ this.state.button }</button>
                    <span className={ this.state.codePass ? 'hidden' : '' }><img src="/static/img/public/warning.png" alt=""/>验证码有误</span>
                </div>
            </div>
        )
    }
}