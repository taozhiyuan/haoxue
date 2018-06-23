import { Component } from 'react'
import Axios from '../../global/orgRequests'

export default class WangEditor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          content: ''
        }
    }

    postState = () => {
        setTimeout(() => {
            this.props.callback(this.state)
        }, 0)
    }

    render () {
        return (
            <div className="editor-box">
                <style jsx>{`
                    .editor-box {
                        width: 826px;
                        margin-left: 140px;
                        margin-top: -15px;
                    }
                `}</style>
                <div ref="editor"></div>
            </div>            
        )
    }

    componentDidMount () {
        const Editor = require('wangeditor')
        const elem = this.refs.editor
        const editor = new Editor(elem)
        
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            this.setState({
                content: html
            })
            this.postState()
            console.info(html)
        }
        editor.customConfig.uploadImgHeaders = {
            'Accept': 'application/json,text/plain,*/*'
        }
        editor.customConfig.uploadImgServer = ``
        editor.customConfig.customUploadImg = function (files, insert) {
            let file = files,
            data = new FormData()
            console.log(file)
            data.append('file', file[0], file[0].name)
            Axios.orgLogoUpload({file: data}).then(res => {
                res.data && insert(res.data.result)
            })
        }
        editor.create()
    }
}