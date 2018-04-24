import React, { Component } from 'react';
import HomeCourse from '../component/home/HomeCourse.jsx';
// import Evaluation from '../component/home/Evaluation.js';
// import Classroom from '../component/home/Classroom.js';
import Information from '../component/home/Information.jsx';
import BannerScroll from '../component/home/BannerScroll.js';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <BannerScroll />
                <HomeCourse />
                {/* <Evaluation />
                <Classroom /> */}
                <Information />
            </div>
        );
    }
}