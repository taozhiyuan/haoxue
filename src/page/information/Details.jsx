import React, { Component } from 'react';
import Path from '../../component/public/Path.jsx';
import Axios from '../../global/axios';
import { getUrlParam } from '../../global/getUrlParam.js';
import './Details.css';

export default class Details extends Component {
    constructor(){
        super()
        this.imgPrefix = sessionStorage.getItem("imgPrefix");
        this.state = {
            data : null
        }
    }
    componentDidMount(){
        window.scrollTo(0,0)
        Axios.DetailsArticle({ id : getUrlParam(this.props.location).id }).then(( a )=>{
            Axios.getStringByKey({ key : a.data.result.richTextKey }).then(( k )=>{
                this.setState({
                    data : a.data.result,
                    getStringByKey : k.data.result,
                })
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        const { data, getStringByKey } = this.state;
        if(!data){ return false }
        return (
            <section className="information-details">
                <div className="main-public">
                    <Path>资讯详情</Path>
                    <h3 className="information-details-title">{ data.articleTitle }</h3>
                    <h6 className="information-details-time">发布时间：{ data.createTime }</h6>
                    <h4 className="information-details-author">作者：{ data.articleAuthor } &emsp;来源：{ data.articleSource }</h4>
                    <article 
                        dangerouslySetInnerHTML={{ __html: getStringByKey }}
                        className="information-details-content"
                    ></article>
                    <footer className="information-details-foot">
                        <button>上一篇：最好的教育戏剧“梦工厂”</button>
                        <button>上一篇：最好的教育戏剧“梦工厂”</button>
                    </footer>
                </div>
            </section>
        );
    }
}