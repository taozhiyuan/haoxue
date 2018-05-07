import React, { Component } from 'react';
import './CityChoice.css';
import cityData from './cityData.js';
import Hot from './Hot.js';
import Province from './Province.js';

export default class Container extends Component {
    render() {
        console.log(0)
        return (
            <div className="IIInsomnia-city-picker">
                <div className="IIInsomnia-hot-wrap">
                    <p>热门城市</p>
                    <ul id="IIInsomnia_hot_city">
                        <Hot data={ cityData } />
                    </ul>
                </div>
                <div className="line"></div>
                <div className="IIInsomnia-wrap">
                    <p>选择省份</p>
                    <ul className="IIInsomnia-province-wrap">
                        <Province data={ cityData } />
                    </ul>
                </div>
            </div>
        )
    }
}

