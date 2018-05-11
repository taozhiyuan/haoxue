import React, { Component } from 'react';
import './InformationList.css';
import { Link } from "react-router-dom";

export default class InformationList extends Component {
    render(){
        const { url, data } = this.props;
        if(!data){ return false }
        return (
            <ul className="Information-List">
                { data.map((item, index)=>(
                    <li key={ index }>
                        <Link to={{ 
                            pathname : `${url}/details`,
                            search : `id=${ item.id }`
                        }}>
                            <h4><b>{ item.articleTitle }</b></h4>
                            <p>核心素养时代，深度学习成为深化课程改革的新趋势。深度学习又称深层次学习，是指学习者以高级思维的发展和实际问题的解决为目标，以整合的知识为内容，积极主动、批判性地学习新的知识和思想，并将它们融入原有的认知结构中，且能将已有...</p>
                            <h5>作者：{ item.articleAuthor }    来源：{ item.articleSource }    发布时间：{ item.createTime }</h5>
                        </Link>
                    </li>
                )) }
            </ul>
        );
    }
}