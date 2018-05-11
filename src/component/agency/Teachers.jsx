
// 教培机构师资
import React, { Component } from 'react';
import './Teachers.css';
import TeacherItem from './TeacherItem.jsx';
import DetailedTitle from './DetailedTitle.jsx';

export default class Teachers extends Component {
    render() {
        const { data, url } = this.props;
        return (
            <div className="agency-detailed-region">
                <DetailedTitle 
                    value="师资"
                    url="/"
                />
                <div className="agency-detailed-region-wrap">
                    { data.length === 0 ? 
                        <h6>暂无内容</h6> :
                        <ul className="agency-detailed-region-list">
                            { 
                                data.map((item,index) => (
                                    <TeacherItem 
                                        key={ index } 
                                        url={ this.props.url } 
                                        data={ item } 
                                    />
                                )) 
                            }
                        </ul>
                        
                    }
                </div>
            </div>
        );
    }
}