
// 分期
import React, { Component } from 'react';
import Path from '../../component/public/Path.jsx';
import DevIng from '../../component/byStages/DevIng.jsx';
import Advantage from '../../component/byStages/Advantage.jsx';

export default class ByStages extends Component {
    render() {
        return (
            <section className="by-Stages">
                <div className="main-public">
                    <Path />
                    <DevIng />
                    <Advantage />
                </div>
            </section>
        );
    }
}
