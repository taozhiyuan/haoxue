import React, { Component } from 'react'
import Head from 'next/head'
import Swiper from 'swiper';

export default class Banner extends Component {
    state = {
        data : [1,2,3]
    }
    componentDidMount(){
        this.setState({
            swiperObj : new Swiper('.swiper-container', {
                autoplay: true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            })
        })
    }
    render(){
        const { data } = this.state;
        return(
            <section>
                <Head>
                    <link rel="stylesheet" href="/static/swiper.css" />
                </Head>
                <div className="main-public">
                    <div className="swiper-container" id="swiper1">
                        <div className="swiper-wrapper">
                            { data.map((item, index)=>(
                                <div className="swiper-slide" key={ index }>
                                    <aside><img src="/static/img/home/banner.png" alt="" /></aside>
                                </div>
                            )) }
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
                <style jsx>{`
                        section {
                            height : 400px;
                            background : #666;
                        }
                        aside {
                            height : 400px;
                        }
                    `}</style>
            </section>
        )
    }
}
