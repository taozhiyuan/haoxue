import React, { Component } from 'react'
import Layout from '../components/Layout.jsx'
import Path from '../components/public/Path.jsx'
import Title from '../components/information/Title.jsx'
import AsideInfo from '../components/public/info/AsideInfo'
import Attention from '../components/public/info/Attention.jsx'
import Share from '../components/information/Share.jsx'
import Correlation from '../components/information/Correlation.jsx'
import axios from '../global/axios'
import Error from 'next/error'

export default class InfoDetails extends Component {
    static async getInitialProps({ query }){
        try {
            const detail = await axios.DetailsArticle({ id : query.id });
            const richText = await axios.getStringByKey({ key : detail.data.result.richTextKey });
            const recommend = await axios.getArticleList({ articleType : '3', pageSize : 5 });
            return {
                data : {
                    detail : detail.data.result, 
                    richText : richText.data.result,
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
    render(){
        const { data, status } = this.props;
        if ( status !== 200 ) {
            return <Error statusCode={ status } />
        }
        return(
            <Layout>
                <div className="main-public">
                    <Path prev={['新闻资讯']} target='全部' />
                    <section>
                        <Title data={ data.detail } />
                        <article dangerouslySetInnerHTML={{ __html: data.richText }}></article>
                        <Share data={ data.detail } />
                        <Correlation />
                    </section>
                    <aside>
                        <AsideInfo data={ data.recommendList } title="推荐阅读" />
                        <Attention />
                    </aside>
                </div>
                <style jsx>{`
                    section {
                        width : 900px;
                        display: inline-block;
                        background-color : #FFF;
                        border-radius : 5px;
                        margin-right : 20px;
                        padding : 50px 40px;
                    }
                        article {
                            padding : 25px 0px;
                            border-bottom : 1px solid #ddd;
                            border-top : 1px solid #ddd;
                            min-height : 400px;
                        }
                        aside {
                            display: inline-block;
                            vertical-align: top;
                        }
                `}</style>
            </Layout>
        )
    }
}
