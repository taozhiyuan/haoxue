
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
            popup : false,
            popupText : null,
            popupState : false,
        }
    }
    componentWillMount(){
        Axios.getStringByKey({ key : this.props.data.richTextKey }).then((res) => {
            this.setState({
                getStringByKey : res.data.result,
            })
        });
        if(sessionStorage.getItem("access_token")){
            Promise.all([
                Axios.CollectionState({ //获取收藏状态
                    token : sessionStorage.getItem("access_token"),
                    id : this.props.data.id
                }),
                Axios.GiveThumbsState({ //获取点赞状态
                    access_token : sessionStorage.getItem("access_token"),
                    commid : this.props.data.id
                })
            ])
            .then(([c, g, k]) => {
                this.setState({
                    collectionState : c.data.result,
                    GiveThumbsState : g.data.result,
                })
            });
        }
    }
    GiveThumbs = () => { //点赞
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
    collection = () => { // 收藏
        if(sessionStorage.getItem("access_token")){
            Axios.collectionCourse({
                collectionType : "1",
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
    cancel = () => { //取消收藏
        const token = sessionStorage.getItem("access_token");
        if(!token){
            this.setState({
                popupState : false,
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
                        collectionState : false,
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
        const { GiveThumbsState, collectionState, popup, popupText, popupState, getStringByKey } = this.state;
        return (
            <div className="text-container">
                <header>
                    <h1>{ data.orgName }</h1>
                    <h3><i className="iconfont icon-kejian"></i>{ data.browsing }</h3>
                    <h4>
                        { collectionState ? 
                            <i className="iconfont icon-guanzhu2" onClick={ this.cancel } />:
                            <i className="iconfont icon-guanzhu" onClick={ this.collection } />
                        }{ data.collections  }
                    </h4>
                    <h4>
                        { GiveThumbsState ? 
                            <i className="iconfont icon-dianzan1" />:
                            <i className="iconfont icon-dianzan" onClick={ this.GiveThumbs } />
                        }{ data.like }
                    </h4>
                </header>
                <div className="imgPlaceholder">
                    <img src={ this.imgPrefix + data.photoOsskey } alt="" />
                </div>
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
                            <td 
                                colSpan="2" 
                                dangerouslySetInnerHTML={{ __html: getStringByKey }}
                            >
                            </td>
                        </tr>
                    </tbody>
                </table>
                { popup ? <Popup state={ popupState }>{ popupText }</Popup> : null }
            </div>
        );
    }
}