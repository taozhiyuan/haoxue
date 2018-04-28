
// 课程详情 ==》 主体
import React, { Component } from 'react';
import "./CourseMain.css"
import { Link } from "react-router-dom";
import Axios from '../../request/axiosHome.js';
import Popup from '../public/Popup.jsx';
import { getUrlParam } from '../../request/getUrlParam.js';

export default class CourseMain extends Component {
    constructor(){
        super()
        this.state = {
            data : null,
            popup : false
        }
    }
    componentWillMount(){
        this.setState({
            data : this.props.data
        })
    }
    collection = () => {
        if(!sessionStorage.getItem("access_token")){
            console.log("请登录")
            this.setState({
                popup : true
            },()=>{
                setTimeout(() => {
                    this.setState({
                        popup : false
                    })
                }, 1000);
            })
            return false;
        }
        Axios.collectionCourse({
            collectionType : "1",
            collectionId : getUrlParam(this.props.location).id,
        },{
            access_token : sessionStorage.getItem("access_token")
        }).then((res)=>{
            console.log(res)
        })
    }
    cancel = () => {
        if(!sessionStorage.getItem("access_token")){
            console.log("请登录")
            this.setState({
                popup : true
            },()=>{
                setTimeout(() => {
                    this.setState({
                        popup : false
                    })
                }, 1000);
            })
            return false;
        }
        Axios.cancelCollectionCourse({
            collectionId : getUrlParam(this.props.location).id,
        },{
            access_token : sessionStorage.getItem("access_token")
        }).then((res)=>{
            console.log(res)
        })
    }
    render(){
        const { url, search } = this.props;
        const { data, popup } = this.state;
        const imgPrefix = sessionStorage.getItem("imgPrefix");
        return (
            <ul className="course-main">
                <li>
                    <div className="imgPlaceholder">
                        <img src={ imgPrefix + data.photoOsskey } alt=""/>
                    </div>
                </li>
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
                    <h5 className="collection">
                        { data.collectionState===1?
                            <i className="iconfont icon-guanzhu2" onClick={ this.cancel }></i>:
                            <i className="iconfont icon-guanzhu" onClick={ this.collection }></i>
                        }
                        <span>{ data.collections }</span>
                    </h5>
                    <Link to={{
                            pathname: `${ url }/courseBeforehand`,
                            search,
                        }}><button>预约试听课程</button>
                    </Link>
                    { popup ? <Popup state={false}>请先登录</Popup> : null }
                </li>
            </ul>
        );
    }
}