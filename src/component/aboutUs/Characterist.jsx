
// 关于我们 功能特色
import React, { Component } from 'react';
import Title from '../public/Title.jsx';
import "./Characterist.css";
import Axios from '../../global/axios.js';

export default class Characterist extends Component {
    constructor(){
        super()
        this.state = {
            data : []
        }
    }
    componentWillMount(){
        Axios.characterist({ articleType : '5' }).then((res)=>{
            // console.log(res.data.result)
            this.setState({
                data : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        const { data } = this.state;
        const text = (new DOMParser()).parseFromString('<p>最新课程，新鲜资讯，优惠活动，一秒到达。点评积分当钱花，掌上选课一触即达。</p>',"text/xml");
        console.log(text)
        return (
            <section className="about-characterist">
                <div className="main-public">
                    <Title>功能特色</Title>
                    <ul className="about-characterist-list">
                        { data.map((item, index)=>(
                            <li key={ index }>
                                <h4>{ item.articleTitle }</h4>
                                <h6 dangerouslySetInnerHTML={{
                                    __html: item.articleContent
                                }}></h6>
                            </li>
                        )) }
                    </ul>
                </div>
            </section>
        );
    }
}