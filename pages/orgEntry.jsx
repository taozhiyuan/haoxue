import React, { Component } from 'react'
import Layout from '../components/Layout.jsx'
import Info from '../components/admission/Info'
import Tel from '../components/admission/Tel'
import Protocols from '../components/admission/Protocols'
import Axios from '../global/orgRequests'
import { ENGINE_METHOD_DIGESTS } from 'constants';


export default class orgEntry extends Component {
    state = {
        userInsert: {
            loginUser: ''
        },
        orgInfoConfirm: {
            classifyArr: '',
            orgName: '',
            orgAddressDetail: '',
            orgPhone: '',
            province: '',
            city: '',
            area: '',
            students: '',
            cycle: '',
            richTextKey: '',
            orgBewrite: '',
            logoKey: '',
            business: '',
            orgResources: ''
        }
    }

    getProps = (parame) => {
        this.setState({userInsert: {loginUser: parame.loginUser}})
    }

    getInfos = param => {
        this.setState({orgInfoConfirm: {...param}})
    }

    getChecked = param => {
        this.setState({checked: param})
    }

    submitAll = () => {       
        let _this = this
        console.log(this.state)
        if (!this.state.checked) {
            alert('请阅读并同意机构入驻服务协议后再提交资料')
            return
        }
        Axios.orgRichContextToOss({
            str: _this.state.orgInfoConfirm.str
        }).then(res => {
            if (res.data) {
                let state = _this.state, obj = {}
                let reg = /^[1][3,4,5,7,8][0-9]{9}$/  

                _this.setState({richTextKey: res.data.result})
                state.orgInfoConfirm.richTextKey = res.data.result
                obj = {userInert: state.userInsert, orgInfoConfirm: state.orgInfoConfirm}
                for (let k in obj.userInert) {
                    if (!obj.userInert[k]) {
                        alert('请填写手机号码')
                        return
                    }else if (reg.test(obj.userInert[k])) {
                        alert('请填写正确手机号')
                        return
                    }
                }
                for (let k in obj.orgInfoConfirm) {
                    if (!obj.orgInfoConfirm[k]) {
                        alert('资料未完成填写，请把所有资料填写完成后再提交！')
                        return
                    }
                }

                Axios.orgInfoConfirmJoin(obj)
            }  
        })
    }

    render () {
        return (        
            <Layout> 
                 <style jsx>{`
                    .wrapper {
                        width: 1200px;
                        margin: 20px auto 0 auto;
                        background: #fff;
                    }
                    
                    button {
                        display: block;
                        margin: 70px auto;
                        width: 200px;
                        height: 40px;
                        background-color: #f5a00a;
                        border-radius: 3px;
                        color: #fff;
                    }
                    .btn:after {
                        display: table;
                        content: '';
                    }
                `}</style>
                <div className="wrapper">
                    <Tel callback={ this.getProps } />
                    <Info callback={ this.getInfos }/>
                    <Protocols callback={ this.getChecked }/>
                    <div className="btn">
                        <button onClick={ this.submitAll }>提交资料</button>
                    </div>
                </div>
            </Layout>
        )
    }
}