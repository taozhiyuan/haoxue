import React, { Component } from 'react'
import axios from '../../../global/axios'

export default class ChartCode extends Component {
    state = {
        value : "",
        chart : null
    }
    trim = (str) => {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    getValue = (event) => {
        const value = this.trim( event.target.value );
        this.setState({
            value : value
        })
        // const match = value.match(/^1[3|4|5|8][0-9]\d{4,8}$/);
        if( value.length > 3 ){
            this.props.callback({ chart_code : value })
        }else{
            this.props.callback({ chart_code : null })
        }
    }
    componentDidMount(){
        this.getChartCode()
    }
    getChartCode = () => {
        axios.getGraphicCode().then(response => {
            return 'data:image/png;base64,' + btoa(
                new Uint8Array(response.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
        }).then(data => {
            this.setState({ chart : data })
        })
    }
    render(){
        const { value, chart } = this.state;
        return(
            <div>
                <input type="text" placeholder="请输入验证码" maxLength="6" 
                    value={ value }
                    onChange={ this.getValue }
                />
                <em><img src={ chart } alt=""/></em>
                <span onClick={ this.getChartCode }>换一张</span>
                <style jsx>{`
                    div {
                        margin-top : 20px;
                    }
                        input {
                            width : 120px;
                            line-height : 30px;
                            font-size : 14px;
                            border-bottom : 1px solid #eee;
                        }
                        em {
                            display: inline-block;
                            width : 90px;
                            height : 30px;
                            background : #CCC;
                            vertical-align: top;
                            margin : 0px 15px;
                        }
                        span {
                            color : #999;
                            font-size : 12px;
                            cursor : pointer;
                        }
                `}</style>
            </div>
        )
    }
}
