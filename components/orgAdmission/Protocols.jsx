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
                        font-size: 12px;
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
                    p.title {
                        text-align: center;
                        margin-top: 25px;
                        font-size: 16px;
                    }
                    .msg-box>div {
                        width: 80%;
                        height: 65%;
                        margin: 25px auto 25px auto;
                        overflow-y: auto;
                    }
                    .msg-box>div>p {
                        margin: 30px 0 20px 0;
                    }
                    .msg-box>div>div {
                        line-height: 40px;
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
                    <p className="title">机构入驻协议</p>
                    <div>
                        <p>一、甲方权利和义务</p> 
                        <div>1、甲方在好学家网站经注册后拥有独立账户网页，可在好学家网上自行发布课程信息和动态信息，对课程、新闻进行发布与更新、查看学员网上咨询报名信息并实施跟踪。</div>    
                        <div>2、甲方可自定义添加导航栏目，上传机构LOGO、教学环境、学员风采、视频展示等，并享有电子地图标注功能。</div>    
                        <div>3、甲方不得发布违法、违规的信息【包括但不限于甲方使用其他机构名称进行宣传、发布重复信息或垃圾信息、涉嫌虚假宣传、发布信息中含有或隐射诋毁其他同行机构的内容、违反法律规定的信息、侵犯第三人权益的信息等】。</div> 
                        <p>二、乙方权利和义务</p>
                        <div>1、乙方有权利随时审查甲方发布的信息是否违法违规，且对违法违规信息自行处理或通知甲方处理。</div>
                        <div>2、乙方保证甲方发布的合法合规的信息在其网站正常显示。</div>
                        <div>3、经甲方要求，乙方客服人员（400-0680258）可指导甲方进行信息发布，必要时可对信息进行更正，但不得影响信息的质量以及效果。</div>
                        <p>三、违约责任[建议乙方根据具体实际情况，明确约定违约金等责任的承担。]</p>
                        <div>1、甲乙双方均须遵循保密约定，不得向其他任何机构泄露本协议内容。</div>
                        <div>2、若甲方的行为导致客户利益受损、第三方利益受损或者乙方利益受损，由甲方负责解决善后事宜并承担全部赔偿责任，乙方不承担任何责任。乙方因此对外承担责任的，甲方不仅应赔偿乙方的全部损失，还应向乙方支付损失额30%的数额作为违约金。</div>
                        <div>3、若甲方发布的信息不符合本协议约定、不符合法律规定或侵犯了第三人的合法权益，一经发现或接到投诉，甲方须在接到乙方通知起  3  小时内无条件删除信息，且百度等搜索平台有权屏蔽其域名、对其发布信息不予收录。除此之外，乙方有权根据实际情况删除信息，作暂停账号或封号等处理。由此给乙方及第三方造成的全部损失（包括但不限于给乙方造成的直接经济损失、乙方支出的律师费、诉讼费、差旅费、鉴定费等），由甲方承担。</div>
                        <p>四、协议解除[建议贵司根据实际情况补充约定乙方有权单方解除本协议的具体情形，并约定相应的违约金。]
因甲方出现以下情形，乙方有权单方解除本协议，并在平台下线甲方所有资料及相关信息。该协议自书面通知到达甲方时解除：</p>
                        <div>（1）甲方发布的信息不符合本协议约定；</div>
                        <div>（2）若甲方的行为导致客户利益受损、第三方利益受损或者乙方利益受损。</div>
                        <p>五、争议解决</p>
                        <div>双方因协议解释或履行发生争议，由双方协商解决。协商不成，双方可以向乙方所在地法院起诉。</div>
                        <p>六、其他</p> 
                        <div>1、协议各方同意，与本协议有关的任何通知，以书面送达方为有效。书面形式包括但不限于：传真、快递、邮件、电子邮件等。协议各方在协议所注明地址为协议履行中书面函件的接收地址、所注明邮箱地址和手机号码均为电子函件和信息的接受方式，各方书面函件以及相关法律文书、电子信息等均按照所注明住所地址或电子方式寄发。如各方住所地址、邮箱地址或手机号码发生变更，应提前三日履行书面通知义务，否则各方所确定的住所地、邮箱地址和手机号码仍为有效的书面函件、相关法律文书、电子信息等的接收地址和方式。</div>
                    </div>
                    <button onClick={ this.hiddenProtocols }>阅读并同意</button>
                </div>
            </div>
        )
    }
}