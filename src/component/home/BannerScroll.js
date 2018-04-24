

import React, { Component } from 'react';
import Swiper from 'swiper';
import './BannerScroll.css';

export default class BannerScroll extends Component {
    componentDidMount(){
        // console.log(this.refs)
        const mySwiper = new Swiper(this.refs.swiper, {
            autoplay: true,//可选选项，自动滑动
        })
    }
    render() {
        return (
            <section className="home-banner-scroll">
                <div className="swiper-container" ref="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">slider1</div>
                        <div className="swiper-slide">slider2</div>
                        <div className="swiper-slide">slider3</div>
                    </div>
                </div>
            </section>
        );
    }
}
