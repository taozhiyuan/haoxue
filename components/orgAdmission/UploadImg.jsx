import { Component } from 'react'
import Axios from '../../global/orgRequests'

export default class UploadImg extends Component {
    state = {
        logoKey: ''
    }

    postState = () => {
        this.props.callback(this.state.logoKey)
    }

    upload = () => {
        this.refs.uploadImg.click()
    }

    fileChange = event => {
        let file = event.target.files[0],
        data = new FormData(),
        _this = this
        console.log(event.target.files[0])
        if (file.size > 2000000) {
            alert('上传图标不能大于2M，请重新上传')
            event.target.value = ''
            return
        }
        data.append('file', file, file.name)
        Axios.orgLogoUpload({file: data}).then((res)=>{
            res ? alert('图标上传成功！') : alert('图标上传失败')
            _this.setState({logoKey: res.data.result})
            _this.postState()
        })
    }

    render () {
        return (
            <div className="float-lf rt">
                <style jsx>{`
                    .hidden {
                        display: none;
                    }
                    .upload {
                        width: 216px;
                        height: 135px;
                        background-color: #eff3f5;
                        position: relative;
                    }
                    .upload>span {
                        font-size: 80px;
                        color: #c4c6c7;
                        position: absolute;
                        left: 75px;
                        top: 0;
                    }
                    .upload>p {
                        color: #c4c6c7;
                        position: absolute;
                        bottom: 28px;
                        left: 70px;
                        font-size: 12px;
                    }
                    .float-lf {
                        float: left;
                    }
                    .rt {
                        margin-right: 20px;
                    }
                `}</style>
                <div className="upload" onClick={ this.upload }>
                    <span>+</span>
                    <p>点击上传图片</p>
                </div>
                <input type="file" className="hidden" ref="uploadImg" accept="image/*" onChange={ this.fileChange }/>
            </div>
        )
    }
}