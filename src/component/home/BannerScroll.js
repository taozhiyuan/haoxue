

import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import './BannerScroll.css';
import Axios from '../../request/axiosHome.js';

export default class BannerScroll extends Component {
    constructor(){
        super()
        this.state = {
            data : [],
            swiperObj : {}
        }
    }
    componentDidMount(){
        Axios.HomeScroll({ articleType : '1' }).then((res)=>{
            this.setState({
                data : res.data.result
            })
            setTimeout(()=>{
                this.setState({
                    swiperObj : new Swiper('#swiper1', {
                        autoplay: 5000,//可选选项，自动滑动
                        grabCursor : true,
                        pagination : '.swiper-pagination',
                    })
                })
            }, 100)
        })

    }
    videoPlay = (e) => {
        this.refs.homeVideo.play()
        // console.log(this.refs)
    }
    videoPause = (e) => {
        e.target.pause()
    }
    render() {
        // console.log(this.state.data)
        const imgPrefix = sessionStorage.getItem("imgPrefix");
        return (
            <section className="home-banner-scroll">
                <div className="swiper-container" id="swiper1">
                    <div className="swiper-wrapper">
                    { this.state.data.map((item, index)=>(
                        <div className="swiper-slide" key={index}>
                            { item.articleFileType === '1'?
                                <img src={ imgPrefix + item.articleFile } alt="" />:
                                <div className="home-video-container">
                                    <i className="ion-play"
                                        onClick={ this.videoPlay }
                                    ></i>
                                    <video width="auto" height="500px"
                                        onClick={ this.videoPause }
                                        ref="homeVideo"
                                    >
                                        <source src={ imgPrefix + item.articleFile } type="video/mp4" />
                                        <source src={ imgPrefix + item.articleFile } type="video/ogg" />
                                        您的浏览器不支持 HTML5 video 标签。
                                    </video>
                                </div>
                            }
                        </div>
                    )) }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        );
    }
}
