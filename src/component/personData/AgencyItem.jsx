
// 我的收藏
import React, { Component } from 'react';
import my_collection from './img/my_collection.png';
import './AgencyItem.css';

export default class AgencyItem extends Component {
    buttonEvn = () => {
        console.log('报名成功')
    }
    render() {
        const { data } = this.props;
        return (
            <li className="my-collection-item">
                <div><img src={ my_collection } alt=""/></div>
                <div className="my-collection-text">
                    <h5>{ data.orgName }</h5>
                    <h3>￥{ data.coursePrice }元&emsp;&emsp;&emsp;<span>已购：{ data.collections }</span></h3>
                    <h5><i className="iconfont icon-guanzhu"></i>{ data.collections }</h5>
                    <h6>上课地址：{ data.orgAddressDetail }</h6>
                    <h6 className="time">上课时间：{ data.courseClassTime }</h6>
                    <h6>咨询电话：{ data.orgPhone }</h6>
                </div>
                <div className="my-collection-inter">
                    { data.reserveState === "1" ? 
                        <button className="finish">已预约</button>
                        :<button onClick={ this.buttonEvn }>预约课程</button>
                    }
                </div>
            </li>
        );
    }
}
