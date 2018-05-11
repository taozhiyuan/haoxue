
// 课程详情 ==》 机构介绍
import React, { Component } from 'react';
import "./AgencyInfo.css"
import Title from "./Title.jsx";

export default class AgencyInfo extends Component {
    render(){
        const { data } = this.props;
        if(!data){ return false }
        return (
            <div className="AgencyInfo-info">
                <Title>机构介绍</Title>
                <div>
                    { data.courseBewrite ? 
                        <div dangerouslySetInnerHTML={{ __html: data.courseBewrite }}></div> : 
                        <h6>暂无内容</h6> }
                </div>
            </div>
        );
    }
}