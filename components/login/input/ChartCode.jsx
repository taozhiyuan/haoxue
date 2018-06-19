import React, { Component } from 'react'
import axios from '../../../global/axios'

export default class ChartCode extends Component {
    state = {
        value : "",
        refresh : `http://120.79.247.254:1111/hxj-base-ui/code/image?deviceId=${window.returnCitySN["cip"]}&width=90&height=36`
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
        axios.getGraphicCode( window.returnCitySN["cip"] ).then((res)=>{
            this.setState({ chart_code : res.data })
        })
    }
    refresh = () => {
        this.setState({ refresh : `http://120.79.247.254:1111/hxj-base-ui/code/image?deviceId=${window.returnCitySN["cip"]}&width=90&height=36#${Math.floor((Math.random()*10)+1)}` })
    }
    render(){
        const { value, chart_code } = this.state;
        return(
            <div>
                <input type="text" placeholder="请输入验证码" maxLength="6" 
                    value={ value } 
                    onChange={ this.getValue }
                />
                {/* <em><img src={ chart_code } alt=""/></em> */}
                <em><img src={ this.state.refresh } alt=""/></em>
                <span onClick={ this.refresh }>换一张</span>
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
