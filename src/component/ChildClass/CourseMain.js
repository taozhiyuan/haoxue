import React, { Component } from 'react';
import "./CourseMain.css"
import { Link } from "react-router-dom";

export default class CourseMain extends Component {
    render(){
        const { url } = this.props;
        return (
            <ul className="course-main">
                <li></li>
                <li className="course-main-text">
                    <h5>课程名称：<span>SSAT1v1课程_SSAT一对一辅导辅导</span></h5>
                    <h5>课程机构：<span>高思教育</span></h5>
                    <h5>价&emsp;&emsp;格：<span className="price">￥5999元</span></h5>
                    <h5>课&emsp;&emsp;时：<span>21个课时</span></h5>
                    <h5>上课时间：<span className="time">3月6日-6月19日; 每周二下午13:30-15:20</span></h5>
                    <h5>上课地址：<span>岳麓大道&ensp;</span><a href="/">查看地图</a></h5>
                    <h5>咨询电话：<i></i><span>400-12341234</span></h5>
                </li>
                <li>
                    <button><Link to={{
                        pathname: `${ url }/courseBeforehand`,
                        search: '?sort=name',
                        hash: '#the-hash',
                        state: { fromDashboard: true }
                    }}>预约试听课程</Link></button>
                </li>
            </ul>
        );
    }
}