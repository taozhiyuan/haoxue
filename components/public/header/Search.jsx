import Link from 'next/link';
import React, { Component } from 'react';

export default class Search extends Component {
    state = {
        select : false,
        type : ["机构", "课程", "视频"],
        target : 0,
        name : ""
    }
    getSelect = (parame) => {
        this.setState({
            target : parame
        })
    }
    switch = () => {
        this.setState({ select : !this.state.select })
    }
    trim = (str) => {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    getText = (e) => {
        this.setState({ name : this.trim(e.target.value) })
    }
    // Keydown = ( event ) => {
    //     if(event.keyCode === 13 && this.state.text){
    //         this.changeValue(this.state.radio, this.state.text)
    //         this.props.history.push('/search')
    //     }
    // }
    render(){
        const { select, name, type, target } = this.state;
        return (
            <div className="head-search">
                <div className="head-search-type"
                    onClick={ this.switch }
                >
                    <span>{ type[target] }</span>&nbsp;
                    <i className="icon ion-ios-arrow-down"></i>
                    { select && 
                        <ul>
                            { type.map((item, index)=>(
                                <li key={ index }
                                    onClick={ ()=>{this.getSelect(index)} } 
                                >{ item }</li>
                            )) }
                        </ul> }
                </div>
                <div className="head-search-content">
                    <i className="icon ion-md-search"></i>
                    <input type="text" placeholder="找课程、机构、视频"
                        value={ name }
                        onChange={ this.getText }
                    />
                </div>
                { name ? <Link href={{
                            pathname : "/search",
                            query : { name, type : target+1 }
                        }}><a><button className="head-btn">搜索</button></a></Link> : 
                        <button className="head-btn">搜索</button>
                }
                <style jsx>{`
                    div.head-search {
                        height : 35px;
                        font-size : 14px;
                        margin-top : 22px;
                        margin-right : 87px;
                    }
                        div.head-search > div {
                            display: inline-block;
                        }
                            div.head-search-type {
                                color : #666;
                                line-height : 33px;
                                text-align : center;
                                position : relative;
                                width : 60px;
                                border : 1px solid #ddd;
                                cursor : pointer;
                                border-top-left-radius : 5px;
                                border-bottom-left-radius : 5px;
                            }
                                div.head-search-type > ul {
                                    position : absolute;
                                    left : 0px;
                                    top : 105%;
                                    width : 100%;
                                    text-align : center;
                                    border : 1px solid #ddd;
                                    border-radius : 3px;
                                    overflow : hidden;
                                }
                                    div.head-search-type > ul > li {
                                        background-color : white;
                                        line-height : 30px;
                                        cursor : pointer;
                                    }
                                    div.head-search-type > ul > li:hover {
                                        background-color : #f5a00a;
                                        color : white;
                                    }
                            div.head-search-content {
                                height : 100%;
                                border-top : 1px solid #ddd;
                                border-bottom : 1px solid #ddd;
                            }
                                div.head-search-content > i {
                                    width: 35px;
                                    text-align: center;
                                    line-height: 37px;
                                    height: 33px;
                                    color: #cdcdcd;
                                    display: inline-block;
                                    font-size: 20px;
                                }
                                div.head-search-content > input {
                                    width : 200px;
                                    height : 100%;
                                    font-size : 14px;
                                    background: none;
                                }
                        button.head-btn {
                            width : 70px;
                            line-height : 35px;
                            text-align : center;
                            background-color : #f5a00a;
                            color : #FFF;
                            border-top-right-radius : 5px;
                            border-bottom-right-radius : 5px;
                        }
                `}</style>
            </div>
        )
    }
}