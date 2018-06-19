import React, { Component } from 'react'
import Layout from '../components/Layout.jsx'
import Banner from '../components/public/Banner.jsx'
import Paging from '../components/public/Paging.jsx'
import Child from '../components/public/info/Child.jsx'
import AsideInfo from '../components/public/info/AsideInfo'
import Attention from '../components/public/info/Attention.jsx'
import axios from '../global/axios'
import Error from 'next/error'

export default class infoList extends Component {
    static async getInitialProps(){
        try {
            const banner = await axios.getArticleList({ articleType : '1' });
            const child = await axios.getArticleList({ articleType : '2' });
            const recommend = await axios.getArticleList({ articleType : '3', pageSize : 5 });
            return {
                data : {
                    bannerList : banner.data.result.list, 
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
    state = {
        paging : 1,
        number : 8,
        data : {
            childList : [{
                id : "id",
                articleFile : "articleFile",
                articleTitle : 'articleTitle',
                articleContent : 'articleContent',
                articleSource : "articleSource",
                articleAuthor : "articleAuthor",
                createTime : "createTime"
            },{
                id : "id",
                articleFile : "articleFile",
                articleTitle : 'articleTitle',
                articleContent : 'articleContent',
                articleSource : "articleSource",
                articleAuthor : "articleAuthor",
                createTime : "createTime"
            },{
                id : "id",
                articleTitle : 'articleTitle',
                articleContent : 'articleContent',
                articleSource : "articleSource",
                articleAuthor : "articleAuthor",
                createTime : "createTime",
                articleFile : "articleFile"
            }],
            news : [{
                articleTitle : 'articleTitle',
                createTime : "createTime",
            },{
                articleTitle : 'articleTitle',
                createTime : "createTime",
            },{
                articleTitle : 'articleTitle',
                createTime : "createTime",
            },{
                articleTitle : 'articleTitle',
                createTime : "createTime",
            },{
                articleTitle : 'articleTitle',
                createTime : "createTime",
            }]
        }
    }
    PagingCallback = (param) => {
        this.setState({
            paging : param
        })
    }
    render(){
        const { data, status } = this.props;
        if ( status !== 200 ) {
            return <Error statusCode={ status } />
        }
        const { paging, number } = this.state;
        let pagingStart = paging * number - number; //起始点=页码*2-2
        let pagingEnd = paging * number; //结束点=页码*2
        const visibi = data.childList.slice(pagingStart, pagingEnd); //切开课程列表，只显示2个
        return(
            <Layout>
                <Banner />
                <div className="main-public">
                    <section>
                        <Child data={ visibi } name="新闻资讯" />
                        <aside>
                            <AsideInfo data={ data.recommendList } title="推荐阅读" />
                            <Attention />
                        </aside>
                        <style jsx>{`
                            section {
                                font-size : 0px;
                                margin-top : 20px;
                            }
                                aside {
                                    display: inline-block;
                                    vertical-align: top;
                                }
                        `}</style>
                    </section>
                </div>
                <Paging 
                    length={ Math.ceil(data.childList.length/number) }
                    PagingCallback={ this.PagingCallback }
                />
            </Layout>
        )
    }
}
