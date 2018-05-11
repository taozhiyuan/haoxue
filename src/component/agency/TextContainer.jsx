
// 机构介绍容器
import React, { Component } from 'react';
import './TextContainer.css';
import Axios from '../../global/axios.js';
import Popup from '../public/Popup.jsx';
import { getUrlParam } from '../../global/getUrlParam.js';

export default class TextContainer extends Component {
    constructor(){
        super()
        this.imgPrefix = sessionStorage.getItem("imgPrefix");
        this.state = {
            GiveThumbs : false,
            popup : false,
            popupText : null,
            popupState : false,
        }
    }
    componentWillMount(){
        if(sessionStorage.getItem("access_token")){
            Axios.CollectionState({
                token : sessionStorage.getItem("access_token"),
                id : this.props.data.id
            }).then(res=>{
                this.setState({ collectionState : res.data.result })
            })
        }
    }
    GiveThumbs = () => {
        Axios.GiveThumbs({
            praiseType : "1",
            praiseId : this.props.data.id,
            ipAddress : window.returnCitySN["cip"],
            access_token : sessionStorage.getItem("access_token")
        }).then((res)=>{
            GiveThumbs : res.data.result
        })
        if(sessionStorage.getItem("access_token")){
            Axios.GiveThumbs({
                praiseType : "1",
                praiseId : this.props.data.id,
                ipAddress : window.returnCitySN["cip"],
                access_token : sessionStorage.getItem("access_token")
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
        }else{
            this.setState({
                popup : true,
                popupText : "请登录",
            })
        }
        setTimeout(() => { this.setState({ popup : false }) }, 1000);
    }
    collection = () => {
        if(sessionStorage.getItem("access_token")){
            Axios.collectionCourse({
                collectionType : "2",
                collectionId : this.props.data.id,
            },{
                access_token : sessionStorage.getItem("access_token")
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
        }else{
            this.setState({
                popup : true,
                popupText : "请登录",
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
                collectionId : this.props.data.id,
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
    render() {
        const data = this.props.data;
        const { GiveThumbs, collectionState, popup, popupText, popupState } = this.state;
        if(!data){ return false }
        return (
            <div className="text-container">
                <header>
                    <h1>{ data.orgName }</h1>
                    <h3><i className="iconfont icon-kejian"></i>{ data.browsing }</h3>
                    <h4>
                        { GiveThumbs ? 
                            <i className="iconfont icon-guanzhu2" />:
                            <i className="iconfont icon-guanzhu" onClick={ this.GiveThumbs } />
                        }{ data.like  }
                    </h4>
                    <h4>
                        { collectionState === 'true' ? 
                            <i className="iconfont icon-dianzan1" onClick={ this.cancel } />:
                            <i className="iconfont icon-dianzan" onClick={ this.collection } />
                        }{ data.collections  }
                    </h4>
                </header>
                <aside><img src={ this.imgPrefix + data.photoOsskey } alt=""/></aside>
                <table className="text-item">
                    <tbody>
                        <tr>
                            <th>高思师资：</th>
                            <td>{ data.reachers }</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>所授课程：</th>
                            <td>{ data.teachCourse }</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>联系地址：</th>
                            <td>{ data.orgAddressDetail }</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>咨询电话：</th>
                            <td>{ data.orgPhone }</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>机构介绍：</th>
                            <td colSpan="2">
                                <iframe 
                                    // onLoad={ this.setIframeHeight }
                                    title="TextContainer-iframe"
                                    id="agency-detailed-frame"
                                    frameBorder="0"
                                    scrolling="yes"
                                    seamless
                                    src ={ this.imgPrefix + data.richTextKey }>
                                </iframe>
                            </td>
                        </tr>
                    </tbody>
                </table>
                { popup ? <Popup state={ popupState }>{ popupText }</Popup> : null }
            </div>
        );
    }
}