
// 图形验证码
import React, { Component } from 'react';
import Axios, { urlPath } from '../../../global/axios.js';

export default class Verification extends Component {
    constructor(){
        super()
        this.state = {
            value : "",
            judge : false,
            visibi : false,
            number : 60,
            refresh : `${ urlPath }/hxj-base-ui/code/image?deviceId=${window.returnCitySN["cip"]}&width=90&height=36`
        }
    }
    componentWillMount(){

        // Axios.getGraphicCode({
        //     deviceId : "hxj",
        //     width : "90",
        //     height : "36"
        // }).then((res)=>{
        //     // let img = window.URL.createObjectURL( new Blob([res.data], {type:'image/jpeg'}) )
        //     // let img = window.URL.createObjectURL(res.data)
        //     let img = new Blob([res], {type:'image/jpeg'})
        //     var reader = new window.FileReader();  
        //     reader.readAsDataURL(img)
        //     reader.onload = (e)=>{
        //         this.setState({
        //             refresh : e.target.result  
        //         })
        //     } 
        //     console.log(reader)
        // })
    }
    trim = (str) => {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    getDate = (e) => {
        const value = this.trim( e.target.value );
        this.setState({
            value : value,
            visibi : true
        })
        // const match = value.match(/^1[3|4|5|8][0-9]\d{4,8}$/);
        if( value.length === 4 ){
            // Axios.getGraphicCode().then((res)=>{
                this.setState({judge : true})
                this.props.callback({ verific : value })
            // }).catch((err)=>{
            //     console.log(err)
            // });
        }else{
            this.setState({judge : false}) 
            this.props.callback({ verific : null })
        }
    }
    refresh = () => {
        this.setState({ refresh : `${ urlPath }/hxj-base-ui/code/image?deviceId=${window.returnCitySN["cip"]}&width=90&height=36#${Math.floor((Math.random()*10)+1)}` })
    }
    render() {
        const { value, judge, visibi } = this.state;
        return (
            <h5 className="graphical">
                <i></i>
                <input type="text" placeholder="输入验证码" maxLength="6" 
                    value={ value }
                    onChange={ this.getDate }
                />
                <span><img src={ this.state.refresh } alt=""/></span>
                <a onClick={ this.refresh }>看不清 ？换一张</a>
                {visibi && <i className={ judge ? "ion-ios-checkmark-outline":"ion-ios-close-outline" } />}
            </h5>
        );
    }
}
