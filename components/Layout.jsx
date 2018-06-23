import React, { Component } from 'react'
import Header from './public/Header'
import Footer from './public/Footer'
import Sigin from './login/SiginIn'
import Login from './login/SiginUp'
import Head from 'next/head'
import { setAuth } from '../global/axiosPublic';

export default class Layout extends Component {
    state = {
        sigin : false,
        login : false,
        siginSucess : false
    }
    setVisibi = (parame) => {
        this.setState({ ...this.state, ...{[parame]:!this.state[parame]} })
    }
    componentDidMount(){
        const token = setAuth(sessionStorage.getItem("token"));
        if(token){
            setAuth(token)
            this.setState({ siginSucess : true })
        }else{
            this.setState({ siginSucess : false })
        }
    }
    render(){
        const { sigin, login, siginSucess } = this.state;
        return(
            <React.Fragment>
                <Head>
                    <title>好学家</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
                    <link rel="stylesheet" href="/static/index.css" />
                    <link href="/static/ionicons/dist/css/ionicons.min.css" rel="stylesheet" />
                    <link href="/static/font/iconfont.css" rel="stylesheet" />
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
                </Head>
                <Header setVisibi={ this.setVisibi } siginSucess={ siginSucess }/>
                { sigin && <Sigin setVisibi={ this.setVisibi } /> }
                { login && <Login setVisibi={ this.setVisibi } /> }
                { this.props.children }
                <Footer />
            </React.Fragment>
        )
    }
}