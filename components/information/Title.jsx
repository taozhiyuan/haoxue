import React, { Component } from 'react'

export default class Title extends Component {
    render(){
        const { data } = this.props;
        return(
            <div>
                <h2>{ data.articleTitle }</h2>
                <h6>
                    <span>文章来源：{ data.articleSource }</span>
                    <span>作者：{ data.articleAuthor }</span>
                    <span>发布时间：！后台无字段</span>
                </h6>
                <style jsx>{`
                    h2 {
                        font-size : 20px;
                        font-weight : bold;
                    }
                    h6 {
                        color : #999;
                        padding : 20px 0px;
                    }
                        span {
                            display: inline-block;
                            margin-right : 20px;
                        }
                `}</style>
            </div>
        )
    }
}
