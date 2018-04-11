import React, { Component } from 'react';
import './News.css';
import HomeAdvantageTitle from './HomeAdvantageTitle.js';
import Axios from '../../request/axiosHome.js';

export default class News extends Component {
    constructor(){
        super()
        this.state = {
            data : []
        }
    }
    componentWillMount(){
        Axios.news().then((res)=>{
            this.setState({
                data : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        let newItem = this.state.data.map(( item,index )=>(
            <li key={ index }>
                <h4>{ item.title }</h4>
                <span>发布时间：{ item.time }</span>
            </li>
        ))
        let newList =   <ul className="home-news-item">{ newItem }</ul>

        return (
            <section className="home-news">
                <div className="main-public">
                    <HomeAdvantageTitle
                        h1="新闻资讯"
                        h4="让好的信息，能传递到每一个人"
                    />
                    <ul className="home-news-list">
                        <li>{ newList }</li>
                        <li>{ newList }</li>
                    </ul>
                </div>
            </section>
        );
    }
}
