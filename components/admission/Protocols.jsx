import { Component } from 'react'

export default class Protocols extends Component {
    state = {
        show: false,
        checked: false
    }

    showProtocols = () => {
        !this.state.show && this.setState({show: true})
    }

    hiddenProtocols = () => {
        this.state.show && this.setState({show: false})
        if (!this.state.checked) {
            this.setState({checked: true})
        }
    }

    check = () => {
        if (!this.state.checked) {
            this.setState({checked: true})
        }else {
            this.setState({checked: false})
        }
        setTimeout(() => {
            this.props.callback(this.state.checked)
        }, 0)       
    }

    render () {
        return (
            <div className="protocol">
                <style jsx>{`
                    .protocol {
                        margin-left: 140px;
                        margin-top: 25px;
                    }
                    .msg-box {
                        width: 500px;
                        height: 478px;
                        position: fixed;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 99999;
                        background: #fff;
                        display: none;
                        border: 1px solid #ddd;
                    }
                    div.show {
                        display: inline-block;
                    }
                    p {
                        text-align: center;
                        margin-top: 25px;
                    }
                    .msg-box>div {
                        width: 80%;
                        height: 70%;
                        margin: 25px auto 0 auto;
                        overflow-y: auto;
                    }
                    .msg-box button {
                        background-color: #f5a00a;
                        color: #fff;
                        margin: 0 auto;
                        border-radius: 3px;
                        width: 285px;
                        height: 40px;
                        display: block;
                    }
                    .checkbox {
                        display: inline-block;
                        width: 14px;
                        height: 14px;
                        border: 1px solid #ddd;
                        margin-right: 10px;                     
                    }
                    .checked {
                        width: 10px;
                        height: 10px;
                        background-color: #f5a00a;
                        margin: 1px;
                        display: block;
                    }
                    .protocol-context {
                        color: #0099ff;
                    }
                `}</style>
                <div className="checkbox" onClick={ this.check }><span className={ this.state.checked ? 'checked' : '' }></span></div>
                <span onClick={ this.check }>我已阅读并同意</span>
                <button className="protocol-context" onClick={ this.showProtocols }> 《机构入驻协议》</button>
                <div className={`msg-box ${this.state.show ? 'show' : ''}`}>
                    <p>机构入驻协议</p>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam saepe ipsum incidunt ab quisquam iste voluptate veritatis est, iusto facere dignissimos accusantium porro laborum corrupti tenetur, ipsa minus ut voluptatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus enim ipsa quaerat debitis, dolorum voluptatibus. Ipsa distinctio perspiciatis, maxime amet cupiditate quasi voluptatibus ab, numquam consequatur recusandae officiis quia laboriosam.
                    </div>
                    <button onClick={ this.hiddenProtocols }>阅读并同意</button>
                </div>
            </div>
        )
    }
}