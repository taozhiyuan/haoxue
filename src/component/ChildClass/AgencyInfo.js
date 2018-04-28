import React, { Component } from 'react';
import "./AgencyInfo.css"
import Title from "./Title.js";

export default class AgencyInfo extends Component {
    constructor(){
        super()
        this.state = {
            imgPrefix : sessionStorage.getItem("imgPrefix")
        }
    }
    render(){
        return (
            <div className="AgencyInfo-info">
                <Title>机构介绍</Title>
                {/* <ul className="AgencyInfo-cont">
                    <li>
                        
                    </li>
                    <li></li>
                </ul> */}
                <iframe 
                    frameBorder="0"
                    scrolling="yes"
                    seamless
                    width="100%"
                    height="100%"
                    src ={ this.state.imgPrefix + this.props.data }>
                </iframe>
            </div>
        );
    }
}