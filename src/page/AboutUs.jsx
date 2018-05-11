
// 关于我们
import React, { Component } from 'react';
import Banner from '../component/public/Banner.jsx';
import DevHistory from '../component/aboutUs/DevHistory.jsx';
import About from '../component/aboutUs/About.jsx';
import Characterist from '../component/aboutUs/Characterist.jsx';
import Recruit from '../component/aboutUs/Recruit.jsx';
import ContactUs from '../component/aboutUs/ContactUs.jsx';

// import { Route, Switch } from "react-router-dom";

export default class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <About />
                <DevHistory />
                <Characterist />
                <Recruit />
                <ContactUs />
            </div>
        );
    }
}
