import React, { Component } from 'react';
import "./CourseMain.css"
import { Link } from "react-router-dom";

export default class CourseMain extends Component {
    render(){
        const { url, data } = this.props;
        const imgPrefix = "http://hxj-oss-bucket.oss-cn-shenzhen.aliyuncs.com/";
        return (
            <ul className="course-main">
                <li><img src={ imgPrefix + data.photoOsskey } alt=""/></li>
                <li className="course-main-text">
                    <h5>课程名称：<span>{ data.courseName }</span></h5>
                    <h5>课程机构：<span>{ data.orgName }</span></h5>
                    <h5>价&emsp;&emsp;格：<span className="price">￥{ data.coursePrice }元</span></h5>
                    <h5>课&emsp;&emsp;时：<span>{ data.courseTime }</span></h5>
                    <h5>上课时间：<span className="time">{ data.courseClassTime }</span></h5>
                    <h5>上课地址：<span>{ data.courseAddress }&ensp;</span><a href="/">查看地图</a></h5>
                    <h5>咨询电话：<i className="ion-ios-telephone"></i><span>{ data.coursePhone }</span></h5>
                </li>
                <li>
                    <h5 className="popularity">人气：<span>{ data.browsing }</span></h5>
                    <h5 className="collection"><i className="iconfont icon-guanzhu"></i><span>{ data.collections }</span></h5>
                    <Link to={{
                            pathname: `${ url }/courseBeforehand`,
                            search: '?sort=name',
                            hash: '#the-hash',
                            state: { fromDashboard: true }
                        }}><button>预约试听课程</button></Link>
                </li>
            </ul>
        );
    }
}