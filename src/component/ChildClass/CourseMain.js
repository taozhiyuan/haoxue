
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
            popup : false,
            popupText : null,
            popupState : false,
            token : sessionStorage.getItem("access_token"),
            collectionState : "false",
            imgPrefix : sessionStorage.getItem("imgPrefix")
        }
    }
    componentWillMount(){
        if(this.state.token){
            Axios.CollectionState({
                token : this.state.token,
                id : this.props.data.id
            }).then(res=>{
                // console.log(res)
                this.setState({ collectionState : res.data.result })
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
    collection = () => {
        const { token } = this.state;
        if(!token){
            this.setState({
                popup : true,
                popupText : "请登录",
            })
        }else{
            Axios.collectionCourse({
                collectionType : "2",
                collectionId : getUrlParam(this.props.location).id,
            },{
                access_token : token
            }).then((res)=>{
                // console.log(res)
                if(res.data.code === "0"){
                    this.setState({
                        popupState : true,
                        collectionState : 'true'
                    })
                }else{
                    this.setState({
                        popupState : false
                    })
                }
                this.setState({
                    popup : true,
                    popupText : res.data.msg
                })
            })
        }
        setTimeout(() => { this.setState({ popup : false }) }, 1000);
    }
    cancel = () => {
        const { token } = this.state;
        if(!token){
            this.setState({
                popup : true,
                popupText : "请登录",
            })
        }else{
            Axios.cancelCollectionCourse({
                collectionType : "2",
                collectionId : getUrlParam(this.props.location).id,
            },{
                access_token : token
            }).then((res)=>{
                if(res.data.code === "0"){
                    this.setState({
                        popupState : true,
                        collectionState : 'false'
                    })
                }else{
                    this.setState({
                        popupState : false
                    })
                }
                this.setState({
                    popup : true,
                    popupText : res.data.msg
                })
            })
        }
        setTimeout(() => { this.setState({ popup : false }) }, 1000);
    }
    render(){
        const { url, search, data } = this.props;
        const { popup, popupText, popupState, collectionState, imgPrefix } = this.state;
        if(!data){ return false }
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
                        { collectionState === 'true'?
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
                    { popup ? <Popup state={ popupState }>{ popupText }</Popup> : null }
                </li>
            </ul>
        );
    }
}