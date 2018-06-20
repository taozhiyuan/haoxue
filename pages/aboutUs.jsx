import React, { Component } from 'react'
import Layout from '../components/Layout.jsx'
import Banner from '../components/public/Banner.jsx'
import About from '../components/aboutUs/About.jsx'
import Culture from '../components/aboutUs/Culture.jsx'
import Manager from '../components/aboutUs/Manager.jsx'
import Business from '../components/aboutUs/Business.jsx'
import Cooperation from '../components/aboutUs/Cooperation.jsx'
import Map from '../components/aboutUs/Map.jsx'
import axios from '../global/axios'
import Error from 'next/error'

export default class AboutUs extends Component {
    static async getInitialProps(){
        try{
            const banner = await axios.getArticleList({ articleType : '1' });
            return {
                data : {
                    bannerList : banner.data.result
                },
                status : 200
            }
        }catch(err) {
            if(!err.response) return { status : 404 }
            return { status : err.response.status  }
        }
    }
    render(){
        const { data, status } = this.props;
        if ( status !== 200 ) {
            return <Error statusCode={ status } />
        }
        return(
            <Layout>
                <Banner data={ data.bannerList.list } />
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
