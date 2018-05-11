
//机构介绍 》课程列表
import React, { Component } from 'react';
import DetailedTitle from './DetailedTitle.jsx';
import ItemMin from '../course/ItemMin.jsx';


export default class Curriculum extends Component {
    render() {
        const { url, data } = this.props;
        return (
            <div className="agency-detailed-region">
                <DetailedTitle 
                    value="课程"
                    url="/"
                />
                <div className="agency-detailed-region-wrap">
                    { data === null ? 
                        <h6>暂无内容</h6> :
                        <ul className="agency-detailed-region-list">
                            { 
                                data.map((item,index) => (
                                    <ItemMin 
                                        data={ item } 
                                        key={ index } 
                                        url={ url }
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