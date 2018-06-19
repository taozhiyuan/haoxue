import React, { Component } from 'react'
import Layout from '../components/Layout.jsx'
import Banner from '../components/public/Banner.jsx'
import About from '../components/aboutUs/About.jsx'
import Culture from '../components/aboutUs/Culture.jsx'
import Manager from '../components/aboutUs/Manager.jsx'
import Business from '../components/aboutUs/Business.jsx'
import Cooperation from '../components/aboutUs/Cooperation.jsx'
import Map from '../components/aboutUs/Map.jsx'

export default class AboutUs extends Component {
    render(){
        return(
            <Layout>
                <Banner />
                {/* 广告栏 */}
                <About />
                {/* 关于我们 */}
                <Culture />
                {/* 企业文化 */}
                <Manager />
                {/* 管理团队 */}
                <Business />
                {/* 业务服务 */}
                <Cooperation />
                {/* 战略合作 */}
                <Map />
            </Layout>
        )
    }
}
