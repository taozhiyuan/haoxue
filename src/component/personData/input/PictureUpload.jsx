
// 上传头像
import React, { Component } from 'react';

import timg from '../../../img/timg.jpeg';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import axios from 'axios';

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

        // 添加请求头
        let param = new FormData() // 创建form对象
        param.append('file', file, file.name) // 通过append向form对象添加数据
        let config = { headers: {'Content-Type': 'multipart/form-data'}}
        // 添加请求头
        axios.post('http://120.79.247.254:1111/hxj-base-ui/user/headImage?access_token='+sessionStorage.getItem("access_token"), 
            param, 
            config
        ).then(response => {
             console.log(response.data)
        })
    }
    // _crop(){
    //     // image in dataUrl
    //     console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
    // }
    render() {
        const { showImg, imgPrefix } = this.state;
        return (
            <div className="picture-upload">
                <span>头像：</span>
                    <div>
                        { this.props.data ?
                            <img src={ imgPrefix + this.props.data } alt="" />:
                            this.state.showImg ?
                                <img src={ this.state.showImg } alt="" />:
                                <h4 onClick={ this.updataImg }>点击上传</h4>
                        }
                        <input type="file" onChange={ this.getFileUrl } />
                    </div>
                
                {/* <div>
                    <Cropper
                        ref='cropper'
                        src={ timg }
                        style={{height: '100%', width: '100%'}}
                        // Cropper.js options
                        aspectRatio={ 1/1 }
                        guides={false}
                        crop={this._crop.bind(this)}
                    />
                </div> */}
                <h5>仅支持JPG、GIF、PNG图片文件，且文件小于5M</h5>
            </div>
        );
    }
}
