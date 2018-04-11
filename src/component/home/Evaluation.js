import React, { Component } from 'react';
import './Evaluation.css';
import HomeAdvantageTitle from './HomeAdvantageTitle.js';

export default class Evaluation extends Component {
    render() {
        return (
            <section className="home-evaluation">
                <div className="main-public">
                    <HomeAdvantageTitle 
                        h1="亲子测评"
                        h4="让教育更科学，让学习更快乐"
                    />
                    <ul className="home-evaluation-list">
                        <li>
                            <h3>孩子测评</h3>
                            <h5>Blink deferred a task in order to make scrolling smoother. Your timer and network tasks should take less than 50ms to run to avoid this. Please see https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/rail and https://crbug.com/574343#c40 for more information.</h5>
                            <button>开始测评</button>
                        </li>
                        <li>
                            <div>
                                <div></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div></div>
                            </div>
                        </li>
                        <li>
                            <h3>孩子测评</h3>
                            <h5>Blink deferred a task in order to make scrolling smoother. Your timer and network tasks should take less than 50ms to run to avoid this. Please see https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/rail and https://crbug.com/574343#c40 for more information.</h5>
                            <button>开始测评</button>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
