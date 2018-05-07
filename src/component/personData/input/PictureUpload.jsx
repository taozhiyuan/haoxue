
// 上传头像
import React, { Component } from 'react';
import timg from '../../../img/timg.jpeg';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import axios from 'axios';
import Axios from '../../../request/axiosHome.js';

export default class PictureUpload extends Component {
    constructor(){
        super()
        this.state = {
            value : "",
            judge : false,
            visibi : false,
            showImg : null,
            imgPrefix : sessionStorage.getItem("imgPrefix")
        }
    }
    getFileUrl = (e) => {
        const file = e.target.files[0];
        this.setState({
            showImg : window.URL.createObjectURL(file)
        })        
        console.log(file)
        
        // 添加请求头
        let param = new FormData() // 创建form对象
        param.append('file', file, file.name) // 通过append向form对象添加数据
        let config = { headers: {'Content-Type': 'multipart/form-data'}}
        // axios({
        //     method: "post",
        //     url: 'http://120.79.247.254:1111/hxj-base-ui/user/headImage?access_token='+sessionStorage.getItem("access_token"),
        //     data : param,
        //     config
        // }).then((res)=>{ console.log(res) });

        Axios.PictureUpload({
            access_token : sessionStorage.getItem("access_token")
        },{param}).then((res)=>{
            console.log(res)
        })
    }
    render() {
        const { showImg, imgPrefix } = this.state;
        return (
            <div className="picture-upload">
                <span>头像：</span>
                    <div>
                        { 
                            showImg ?
                                <img src={ showImg } alt="" />:
                                this.props.data ?
                                <img src={ imgPrefix + this.props.data } alt="" />:
                                <h4 onClick={ this.updataImg }>点击上传</h4>
                        }
                        <input type="file" onChange={ this.getFileUrl } />
                    </div>
                <h5>仅支持JPG、GIF、PNG图片文件，且文件小于5M</h5>
            </div>
        );
    }
}
