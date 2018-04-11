import React, { Component } from 'react';
import Advantage from '../component/home/Advantage.js';
import Evaluation from '../component/home/Evaluation.js';
import Classroom from '../component/home/Classroom.js';
import News from '../component/home/News.js';

import Banner from '../component/public/Banner.js';
// import PublicHead from '../component/PublicHead.js';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                {/* <PublicHead /> */}
                <Banner>首页</Banner>
                <Advantage />
                <Evaluation />
                <Classroom />
                <News />
            </div>
        );
    }
}