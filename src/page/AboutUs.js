
// 关于我们
import React, { Component } from 'react';
import Banner from '../component/public/Banner.js';
import CoreValue from '../component/aboutUs/CoreValue.js';
import About from '../component/aboutUs/About.js';
import Idea from '../component/aboutUs/Idea.js';
import ContactUs from '../component/aboutUs/ContactUs.js';

// import { Route, Switch } from "react-router-dom";

export default class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <Banner>关于我们</Banner>
                <CoreValue />
                <About />
                <Idea />
                <ContactUs />
            </div>
        );
    }
}