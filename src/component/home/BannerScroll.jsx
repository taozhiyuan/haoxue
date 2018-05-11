
//主页滚动栏
import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import './BannerScroll.css';
import Axios from '../../global/axios.js';
import { Link } from "react-router-dom";

export default class BannerScroll extends Component {
    constructor(){
        super()
        this.state = {
            data : null,
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
    // Jump = () => { // 跳转
    //     this.
    // }
    render() {
        // console.log(this.state.data)
        const imgPrefix = sessionStorage.getItem("imgPrefix");
        return (
            <section className="home-banner-scroll">
                { this.state.data &&   //有数据才渲染下面
                    <div className="swiper-container" id="swiper1">
                        <div className="swiper-wrapper">
                        { this.state.data.map((item, index)=>(  //开始遍历渲染数据
                            <div className="swiper-slide" key={index}
                                onClick={ this.Jump }
                            >
                                {/* <Link to={ item.articleUrl }> */}
                                <a href={ item.articleUrl }>
                                    { item.articleFileType === '1'?  //判断是图片还是视频
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
                                    </a>
                                {/* </Link> */}
                            </div>
                        )) }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                }
            </section>
        );
    }
}
