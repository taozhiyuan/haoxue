import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout.jsx'
import DetailsMain from '../components/course/DetailsMain.jsx'
import CourseIntro from '../components/course/CourseIntro.jsx'
import CourseVideo from '../components/course/CourseVideo.jsx'
import OtherCourse from '../components/course/OtherCourse.jsx'
import Error from 'next/error'
import axios from '../global/axios'

export default class CourseDetails extends Component {
    static async getInitialProps({ query }) {
        try {
            const detail = await axios.getAgencyCourseDetail({ id : query.id });
            const relevant = await axios.pushAgencyCourse({ courseId : query.id });
            const video = await axios.getVideoManager({ id : query.id, type : '2' });
            return { 
                data: { 
                    detail : detail.data.result,
                    relevant : relevant.data.result,
                    video : video.data.result
                },
                status : 200
            }
        }catch(err){
            return { status : err.response.status }
        }
    }
    render(){
        const { data, status } = this.props;
        if ( status !== 200 ) {
            return <Error statusCode={ status } />
        }
        return (
            <Layout>
                <Head>
                    <script src="http://api.map.baidu.com/getscript?v=2.0&amp;ak=ln07DGBcyPuXoyVlN7Agb68aMLBLmZNV&amp;services=&amp;t=20180529182003"></script>
                </Head>
                <DetailsMain data={ data.detail } />
                <div className="main-public">
                    <CourseIntro name="课程介绍" data={ data.detail.richTextKey } />
                    <CourseVideo name="课程视频" data={ data.video } />
                </div>
                <OtherCourse data={ data.relevant } />
                <style jsx>{`
                    div {
                        overflow : hidden;
                        padding-top : 20px;
                    }
                `}</style>
            </Layout>
        )
    }
}