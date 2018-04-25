
// 上传头像
import React, { Component } from 'react';

// import timg from '../../img/timg.jpeg';
// import Cropper from 'react-cropper';
// import 'cropperjs/dist/cropper.css';

export default class PictureUpload extends Component {
    constructor(){
        super()
        this.state = {
            value : "",
            judge : false,
            visibi : false
        }
    }
    render() {
        return (
            <div className="picture-upload">
                <span>头像：</span>
                <div className="ion-person-add">
                    <h4>点击上传</h4>
                    <input type="file" />
                </div>
                <h5>仅支持JPG、GIF、PNG图片文件，且文件小于5M</h5>
                {/* <Cropper
                    ref='cropper'
                    src={ timg }
                    style={{height: 200, width: '100%'}}
                    // Cropper.js options
                    aspectRatio={ 16/9 }
                    guides={false}
                    // crop={this._crop.bind(this)}
                /> */}
            </div>
        );
    }
}
