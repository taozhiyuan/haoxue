import { Component } from 'react'
import TypeSelect from './TypeSelect'
import UploadImg from './UploadImg'
import Editor from './Wangeditor'
import City from './City'

export default class Infos extends Component {
    state = {
        orgName: '',
        orgNameAvailable: true,
        orgAddressDetail: '',
        students: '',
        cycle: ''
    }

    postState = () => {
        setTimeout(() => {
            this.props.callback(this.state)
        }, 0)       
    }

    orgNameChange = event => {
        if (event.target.value.length > 5) {
            this.setState({orgName: event.target.value})
            this.setState({orgNameAvailable: true})
        } else {
            this.setState({orgName: ''})
            this.setState({orgNameAvailable: false})
        }
        this.postState()
    }

    getContent = (param) => {
        this.setState({str: param.content, orgBewrite: param.content})
        this.postState()
    }

    getAddress = param => {
        this.setState({
            province: param.provId,
            city: param.cityId,
            area: param.areaId
        })
        this.postState()
    }

    getSelectTypes = param => {
        param = param.join(',')
        this.setState({classifyArr: param})
        this.postState()   
    }

    getLogoKey = param => {
        this.setState({logoKey: param})
        this.postState()
    }

    getStudents = event => {
        this.setState({students: event.target.value})
        this.postState()
    }

    getCycle = event => {
        this.setState({cycle: event.target.value})
        this.postState()
    }

    getOrgAddressDetail = event => {
        this.setState({orgAddressDetail: event.target.value})
        this.postState()
    }

    getTeachers = event => {
        this.setState({orgResource: event.target.value})
        this.postState()
    }

    getTimeRange = event => {
        this.setState({business: event.target.value})
        this.postState()
    }

    getOrgPhone = event => {
        this.setState({orgPhone: event.target.value})
        this.postState()
    }

    render () {
        return (
            <div className="card">
                <style jsx>{`
                    .title {
                        font-size: 14px;
                    }
                    .card {
                        font-size: 12px;
                    }
                    .card input, .card select {
                        border: 1px solid #ddd;
                        padding: 8px;
                        margin: 30px 20px;
                    }
                    .title-box {
                        border-bottom: 1px solid #ddd;
                        width: 1140px;
                        margin: 0 auto 28px auto;
                    }
                    .title-box:before {
                        display: table;
                        content: '';
                    }
                    .title {
                        margin: 42px 0 20px 0;
                    }
                    .card>div>span {
                        width: 120px;
                        display: inline-block;
                        text-align: right;
                    }
                    .ele-inline {
                        display: inline-block;
                    }
                    .card>div>span.hidden {
                        display: none;
                    }
                    .float-lf {
                        float: left;
                    }
                    .clear {
                        clear: both;
                    }
                    .info-standard-dis {
                        margin-right: 20px;
                    }
                    .intro {
                        margin-bottom: 20px;
                    }
                    .size {
                        color: #f5a00a;
                    }
                    #address {
                        margin: 20px auto 20px 140px;
                        width: 400px;
                    }
                    #tch {
                        width: 400px;
                    }
                    img {
                        display: inline-block;
                        width: 14px;
                        height: 14px;
                        vertical-align: middle;
                        margin-right: 6px;
                    }
                    .card>div>span:last-child {
                        color: red;
                    }
                `}</style>
                <div className="title-box">
                    <p className="title">机构信息</p>
                </div> 
                <div>
                    <span className="float-lf info-standard-dis">机构图标</span>
                    <UploadImg callback={ this.getLogoKey }/>
                    <div className="ele-inline">
                        <p className="intro">尺寸大于216 X 135,小于520 X 325 <br/>
                            文件小于2M <br/>
                            支持JPG/PNG/BMP等格式图片
                        </p>
                        <p className="size">推荐尺寸：520 X 325</p>
                    </div>
                    <div className="clear"></div>
                </div>
                <div>
                    <span>机构名称</span>
                    <input type="text" placeholder="填写机构名称" onChange={ this.orgNameChange }/>
                    <span className={ this.state.orgNameAvailable ? 'hidden' : '' }><img src="/static/img/public/warning.png" alt=""/>机构名称太短</span>
                </div>
                <div>
                    <span>学员规模</span>
                    <select onChange={ this.getStudents } name="" id="">
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                    </select>
                </div>
                <div>
                    <span>经营周期</span>
                    <select onChange={ this.getCycle } name="" id="">
                        <option value="1">1年</option>
                        <option value="2">2年</option>
                        <option value="3">3年</option>
                    </select>
                </div>
                <div>
                    <span>师资介绍</span>
                    <input onChange={ this.getTeachers } id="tch" type="text" placeholder="填写师资介绍，例：教师12名，研究生2名，专教2名"/>
                </div>
                <div>
                    <span>营业时间</span>
                    <input onChange={ this.getTimeRange } type="text" placeholder="填写营业时间 例：9:00-18:00"/>
                </div>
                <div>
                    <span>联系电话</span>
                    <input onChange={ this.getOrgPhone } type="text" placeholder="填写联系电话"/>
                </div>
                <div>
                    <span>机构地址</span>
                    <City callback={ this.getAddress } /> <br/>           
                    <input onChange={ this.getOrgAddressDetail } id="address" type="text" placeholder="填写详细楼号，例：五一大道699号xxx大厦5号"/>
                </div>
                <div>
                    <span className="float-lf">机构分类</span>
                    <TypeSelect callback={ this.getSelectTypes }/>
                </div>
                <div>
                    <span>机构简介</span>
                    <Editor  callback={ this.getContent }/>
                </div>            
            </div>           
        )
    }
}