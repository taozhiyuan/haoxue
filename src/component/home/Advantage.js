import React, { Component } from 'react';
import './Advantage.css';
import HomeAdvantageTitle from './HomeAdvantageTitle.js';

export default class Advantage extends Component {
    constructor(){
        super()
        this.state = {
            data : [
                {
                    name : "专业评测",
                    text : "合作国内外最权威专业的测评体系，分别针对家长和孩子多维度测评，了解孩子的认知发展情况，有效地指导孩子全面发展。",
                    url : require("./img/home_advantage_1.png"),
                    hoverUrl : require("./img/home_advantage_1h.png")
                },
                {
                    name : "精准匹配",
                    text : "平台根据测评结果，匹配最适合孩子的教培机构和老师，精准去广告化的信息匹配和教培规划，让家长不再因选择而焦虑。",
                    url : require("./img/home_advantage_2.png"),
                    hoverUrl : require("./img/home_advantage_2h.png")
                },
                {
                    name : "点评积分",
                    text : "介入最新的区块链技术，打造公开、公平、不可篡改的评价体系，让每一个家长都能客观分享真实的感受，看到最真实的口碑信息。",
                    url : require("./img/home_advantage_3.png"),
                    hoverUrl : require("./img/home_advantage_3h.png")
                },
                {
                    name : "分期支付",
                    text : "提供学费分期支付服务，零首付零利息，手续简单、快捷秒批。不仅减轻了资金压力，更能为学员提供维权服务，保障消息者权益。",
                    url : require("./img/home_advantage_4.png"),
                    hoverUrl : require("./img/home_advantage_4h.png")
                }
            ],
            mouseState : null
        }
    }
    entereUrl = (parame) => {
        this.setState({
            mouseState : parame
        })
    }
    leaveUrl = () => {
        this.setState({
            mouseState : null
        })
    }
    render() {
        return (
            <section className="home-advantage">
                <div className="main-public">
                    <HomeAdvantageTitle 
                        h1="优势与技术特点"
                        h4="专业评测、精准匹配、去中心化区块链、分期学"
                    />
                    <ul className="home-advantage-list">
                    { this.state.data.map((item,index)=>(
                        <li 
                            onMouseEnter={ ()=>{this.entereUrl(index)} } 
                            onMouseLeave={ this.leaveUrl } 
                            key={ index }>
                            <div><img src={ this.state.mouseState === index?item.hoverUrl:item.url } alt=""/></div>
                            <h2>{ item.name }</h2>
                            <h4>{ item.text }</h4>
                        </li>
                    )) }
                    </ul>
                </div>
            </section>
        );
    }
}
