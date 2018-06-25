import React, { Component } from 'react'
import Layout from '../components/Layout.jsx'
import Banner from '../components/public/Banner.jsx'
import Forward from '../components/home/Forward.jsx'
import Course from '../components/home/CourseList.jsx'
import SubBanner from '../components/home/SubBanner.jsx'
import Agency from '../components/home/AgencyList.jsx'
import Information from '../components/home/Information.jsx'
import axios from '../global/axios'
import Error from 'next/error'

export default class Index extends Component {
    static async getInitialProps(){
        try {
            const banner = await axios.getArticleList({ articleType : '1' });
            const org = await axios.getPushList({ pushType : '1', number : 10 })
            const course = await axios.getPushList({ pushType : '2', number : 10 })
            const child = await axios.getArticleList({ articleType : '15', pageSize : 3 })
            const recommend = await axios.getArticleList({ articleType : '14', pageSize : 5 });
            return {
                data : {
                    bannerList : banner.data.result, 
                    orgList : org.data.result, 
                    courseList : course.data.result,
                    childList : child.data.result.list,
                    recommendList : recommend.data.result.list
                },
                status : 200
            }
        }
        catch(err) {
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
                <Forward />
                <Course data={ data.courseList } />
                <SubBanner />
                <Agency data={ data.orgList } />
                <Information data={{
                    child : data.childList,
                    recommendList : data.recommendList
                }} />
            </Layout>
        )
    }
}
