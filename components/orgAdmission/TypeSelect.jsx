import { Component } from 'react'
import Axios from '../../global/orgRequests'


export default class TypeSelect extends Component {
    state = {
        types: [],
        selectedArr: []
    }

    postState = () => {
        setTimeout(() => {
            this.props.callback(this.state.selectedArr)
        }, 0)
        
    }

    initTypes = () => {
        let _this = this
        Axios.orgTypes({classifyType: 'orgType'}).then(res => {
            if (res.data.result && res.data.result.length > 0) {
                res.data.result.forEach((i, n) => {
                    i.select = 0
                })
                _this.setState({types: res.data.result})
            }
        })
    }

    select = (item, index) => {
       let types = this.state.types,
       selectedArr = this.state.selectedArr

       if (selectedArr.length >= 3 && item.select == 0) {
           alert('最多只能选择三个')
           return
       }

       types.forEach((i, n) => {     
            if (n == index) {
               if (types[n].select == 0) {
                   types[n].select = 1
                   selectedArr.push(i.id)
               }else {
                   types[n].select = 0
                   selectedArr.splice(n, 1)
               }
            }
        })
        this.setState({types: types, selectedArr: selectedArr})
        this.postState()    
    }



    componentDidMount () {
        this.initTypes()
        this.postState()
    }

    render () {
        return (
            <ul ref="typeList" className="typeList">
                <style jsx>{`
                    .typeList {
                        margin-bottom: 20px;
                    }
                    .selected {
                        border: 1px solid #ddd;
                        border-radius: 50%;
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        vertical-align: top;
                        margin-right: 10px;
                    }
                    .active {
                        width: 6px;
                        height: 6px;
                        margin: 4px auto;
                        background: #f5a00a;
                        border-radius: 50%;                        
                    }
                    li {
                        float: left;
                        width: 16.6%;
                        margin-bottom: 20px;
                    }
                    ul {
                        width: 500px;
                        margin-left: 140px;
                    }
                    ul:after {
                        display: block;
                        content: '';
                        clear: both;
                    }
                `}</style>
                {this.state.types.map((item, index) => (
                        <li 
                            key={item.id} 
                            onClick={ ()=>{this.select(item, index)} }
                        >
                            <div className='selected' data-select={this.state.types[index].select}>
                                <div className={this.state.types[index].select == 1 ? 'active' : ''}></div>
                            </div>
                            {item.typeName}
                        </li>
                    )
                )}
            </ul>
        )
    }
}