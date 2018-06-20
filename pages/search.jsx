import React, { Component } from 'react';
import Layout from '../components/Layout.jsx'
import NotFind from '../components/search/NotFind.jsx'
import Prompt from '../components/search/Prompt.jsx'
import CourseItem from '../components/course/CourseItem.jsx'
import AgencyItem from '../components/agency/AgencyItem.jsx'
import VideoItem from '../components/public/VideoItem.jsx'
import Paging from '../components/public/Paging.jsx'
import Error from 'next/error'
import axios from '../global/axios'

export default class Search extends Component {
    static async getInitialProps({ query }){
        const list = await axios.commonQuery({ name : query.name, type : query.type });//搜索列表
        let data = list.data.result;
        return {
            data : data.agencyCourseVoList || data.agencyOrgOrgVoList || data.videoManagerVoList,
            query : { name : query.name, type : query.type },
            status : 200
        }
    }
    state = {
        paging : 1,
        number : 8
    }
    PagingCallback = (param) => {
        this.setState({
            paging : param
        })
    }
    render(){
        let { data, query, status } = this.props;
        const { paging, number } = this.state;
        let pagingStart = paging * number - number; //起始点=页码*2-2
        let pagingEnd = paging * number; //结束点=页码*2
        let visibi = null;
        if(data instanceof Array){ 
            visibi = data.slice(pagingStart, pagingEnd);//切开课程列表，只显示2个 
        }
        let Item = null;
        switch (query.type){
            case '1':
                Item =  AgencyItem;
            break;
            case '2':
                Item =  CourseItem;
            break;
            default :
                Item =  VideoItem;
        }
        if ( status !== 200 ) {
            return <Error statusCode={ status } />
        }
        return (
            <Layout>
                <div className="main-public">
                    { data && data.length !== 0 ? 
                        <>
                            <Prompt keyword={ query.name } />
                            <ul>
                                { visibi.map((item, index)=>(
                                    <Item data={ item } key={index} />
                                )) }
                            </ul>
                            <Paging 
                                length={ Math.ceil(data.length/number) }
                                PagingCallback={ this.PagingCallback }
                            />
                        </> : <><Prompt /><NotFind /></>
                    }
                    <style jsx>{`
                        ul {
                            background-color : #FFF;
                            border-radius : 5px;
                            padding : 10px;
                            overflow : hidden;
                        }
                    `}</style>
                </div>
            </Layout>
        )
    }
}