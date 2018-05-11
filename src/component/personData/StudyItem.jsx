
// 我的收藏
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './StudyItem.css';

export default class CourseItem extends Component {
    
    render() {
        const { data } = this.props;
        const toUrl = data.courseType === "parent" ? '/parentClassList/course' : '/childClassList/course';
        return (
            <li className="my-collection-item">
                <div className="imgPlaceholder">
                    <img src={ sessionStorage.getItem("imgPrefix")+data.photoOsskey } alt=""/>
                </div>
                <div className="my-collection-text">
                    <h5>{ data.courseName }</h5>
                    <h3>￥{ data.coursePrice }元&emsp;&emsp;&emsp;<span>已购：{ data.collections }</span></h3>
                    <h5><i className="iconfont icon-guanzhu"></i>{ data.collections }</h5>
                    <h6>上课地址：{ data.courseAddress }</h6>
                    <h6 className="time">上课时间：{ data.courseClassTime }</h6>
                    <h6>咨询电话：{ data.coursePhone }</h6>
                </div>
                <div className="my-collection-inter">
                    <Link to={{
                        pathname : toUrl,
                        search: `id=${ data.courseId }`
                    }}><button>查看详情</button></Link>
                </div>
            </li>
        );
    }
}
