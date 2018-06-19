import React, { Component } from 'react';
import cityData from './cityData.js';
import Hot from './Hot.js';
import Province from './Province.js';

export default class Container extends Component {
    render() {
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
                <style jsx global>{`
                    div.IIInsomnia-city-picker{
                        position: absolute;
                        top: 65px;
                        border: 1px solid #c9cbce;
                        width: 370px;
                        background: #ffffff;
                        z-index: 9;
                        text-align: left;
                        font-size: 14px;
                    }
                    div.IIInsomnia-city-picker:before, div.IIInsomnia-city-picker:after{
                        content: '';
                        display: block;
                        width: 0;
                        height: 0;
                        border-width: 10px;
                        border-style: solid;
                        position: absolute;
                        left: 20px;
                        z-index: 999999;
                    }
                    div.IIInsomnia-city-picker:before{
                        border-color: transparent transparent #ffffff;
                        top: -18px;
                        z-index: 9999999;
                    }
                    div.IIInsomnia-city-picker:after{
                        border-color: transparent transparent #c9cbce;
                        top: -20px;
                    }
                    div.IIInsomnia-city-picker *{
                        box-sizing: border-box;
                        margin: 0 auto;
                        padding: 0;
                        color: #666666;
                    }
                        div.IIInsomnia-city-picker p {
                            font-weight: bold;
                            padding: 0 4px;
                            margin-top: 4px;
                            margin-bottom: 10px;
                            font-size: 14px;
                        }
                            div.IIInsomnia-city-picker ul li {
                                display: inline-block;
                                position: relative;
                                margin: 4px;
                                cursor: pointer;
                            }
                            div.IIInsomnia-city-picker .line{
                                width: 340px;
                                margin: 0 auto;
                                margin-top: 4px;
                                border-bottom: 1px solid #d8d8d8;
                            }
                    
                    /*热门城市*/
                    div.IIInsomnia-hot-wrap {
                        width: 100%;
                        background: #fff;
                        padding: 9px;
                    }
                        div.IIInsomnia-hot-wrap ul li{
                            width: 50px;
                            height: 30px;
                            text-align: center;
                            line-height: 30px;
                            color: #666666;
                            // background-color: #f5f5f5;
                        }
                        div.IIInsomnia-hot-wrap ul li:hover{
                            color: #f39e09;
                        }
                    
                    /*选择省份*/
                    div.IIInsomnia-wrap{
                        position: relative;
                        width: 100%;
                        background: #fff;
                        padding: 9px;
                    }
                        ul.IIInsomnia-province-wrap > li.active {
                            z-index: 9;
                        }
                            ul.IIInsomnia-province-wrap > li > div {
                                width: 50px;
                                height: 30px;
                                text-align: center;
                                line-height: 30px;
                                position: relative;
                                // background-color: #f5f5f5;
                                border: 1px solid #FFF;
                            }
                            ul.IIInsomnia-province-wrap > li > div:hover {
                                color: #f39e09;
                            }
                            ul.IIInsomnia-province-wrap > li > div.active {
                                border-color:#D8D8D8;
                                border-bottom-color: #ffffff;
                                color: #f39e09;
                                background-color: #ffffff;
                            }
                    
                    /* 选择市 */
                    ul.IIInsomnia-city-wrap {
                        border: 1px solid #D8D8D8;
                        background: #fff;
                        position: absolute;
                        top: 29px;
                        width: 312px;
                        padding: 10px;
                    }
                        ul.IIInsomnia-city-wrap > li {
                            width: 50px;
                            height: 30px;
                            text-align: center;
                            line-height: 30px;
                            color: #999999;
                            background-color: #f5f5f5;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            vertical-align: bottom;
                        }
                        ul.IIInsomnia-city-wrap > li:hover {
                            color: #f39e09;
                        }
                `}</style>
            </div>
        )
    }
}

