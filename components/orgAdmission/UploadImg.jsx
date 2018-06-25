import { Component } from 'react'
import Axios from '../../global/orgRequests'

export default class UploadImg extends Component {
    state = {
        logoKey: ''
    }
    upload = () => {
        this.refs.uploadImg.click()
    }
    fileChange = event => {
        const file = event.target.files[0];
        this.setState({
            showImg : window.URL.createObjectURL(file)
        })
        let data = new FormData();
        if (file.size > 2000000) {
            alert('上传图标不能大于2M，请重新上传')
            event.target.value = ''
            return false;
        }
        data.append('file', file, file.name)
        Axios.orgLogoUpload({file: data}).then((res)=>{
            res ? alert('图标上传成功！') : alert('图标上传失败')
            this.props.callback(res.data.result)
        })
    }

    render () {
        const { showImg } = this.state;
        return (
            <div className="float-lf rt">
                <div className="upload" onClick={ this.upload }>
                    {
                        showImg ? 
                            <img src={ showImg } alt="" />:<>
                                <span>+</span>
                                <p>点击上传图片</p>
                            </>
                    }
                </div>
                <input type="file" className="hidden" ref="uploadImg" accept="image/*" onChange={ this.fileChange }/>
                <style jsx>{`
                    .hidden {
                        display: none;
                    }
                    .upload {
                        width: 216px;
                        height: 135px;
                        background-color: #eff3f5;
                        position: relative;
                        text-align : center;
                        cursor : pointer;
                    }
                    .upload>span {
                        font-size: 80px;
                        color: #c4c6c7;
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
            </div>
        )
    }
}