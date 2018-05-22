
// 课程详情 ==》 机构介绍
import React, { Component } from 'react';
import "./AgencyInfo.css"
import Title from "./Title.jsx";
import Axios from '@/global/axios.js';

export default class AgencyInfo extends Component {
    constructor(){
        super()
        this.state = {
            getStringByKey : null
        }
    }
    componentWillMount(){
        Axios.getStringByKey({ key : this.props.data.richTextKey }).then((res) => {
            this.setState({
                getStringByKey : res.data.result,
            })
        });
    }
    render(){
        const { data } = this.props;
        if(!data){ return false }
        return (
            <div className="AgencyInfo-info">
                <Title>机构介绍</Title>
                <div>
                    { this.state.getStringByKey ? 
                        <div dangerouslySetInnerHTML={{ __html: this.state.getStringByKey }}></div> : 
                        <h6>暂无内容</h6> }
                </div>
            </div>
        );
    }
}