import React, { Component } from 'react'
import Child from '../public/info/Child.jsx';
import AsideInfo from '../public/info/AsideInfo';

export default class Information extends Component {
    state = {
        data : {
            child : [{
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
    render(){
        const { data } = this.props;
        return(
            <div className="main-public">
                <section>
                    <Child data={ data.child } name="亲子视界" url="/infoList" />
                    <AsideInfo data={ data.recommendList } title="行业新闻" />
                    <style jsx>{`
                        section {
                            font-size : 0px;
                            margin-top : 20px;
                        }
                    `}</style>
                </section>
            </div>
        )
    }
}
