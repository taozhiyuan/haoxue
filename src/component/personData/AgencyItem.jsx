
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
        if(!data){ return false }
        return (
            <ul className="my-collection-list">
                { data.map((item, index)=>(
                    <li className="my-collection-item" key={ index }>
                        <div className="imgPlaceholder">
                            <img src={ sessionStorage.getItem("imgPrefix")+item.photoOsskey } alt="" />
                        </div>
                        <div className="my-collection-text">
                            <h5>{ item.orgName }</h5>
                            <h3>￥{ item.coursePrice }元&emsp;&emsp;&emsp;<span>已购：{ item.collections }</span></h3>
                            <h5><i className="iconfont icon-guanzhu"></i>{ item.collections }</h5>
                            <h6>上课地址：{ item.orgAddressDetail }</h6>
                            <h6 className="time">上课时间：{ item.courseClassTime }</h6>
                            <h6>咨询电话：{ item.orgPhone }</h6>
                        </div>
                        <div className="my-collection-inter">
                            { item.reserveState === "1" ? 
                                <button className="finish">已预约</button>
                                :<button onClick={ this.buttonEvn }>预约课程</button>
                            }
                        </div>
                    </li>
                ))
                }
            </ul>
        );
    }
}
