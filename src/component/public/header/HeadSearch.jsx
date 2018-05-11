//公头部 =》 搜索
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { inject, observer } from 'mobx-react';
@inject('search')

@observer
class HeadSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            radio : true,//true代表课程，false代表机构
            text : ""
        }
        this.store = this.props.search;
        this.changeValue = this.store.changeValue.bind(this.store);
    };
    trim = (str) => {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    getRadio = (e) => {
        this.setState({
            radio : !this.state.radio
        })
    }
    getText = (e) => {
        this.setState({ text : this.trim(e.target.value) })
    }
    Jump = () => {
        if(this.state.text){
            this.changeValue(this.state.radio, this.state.text)
            this.props.history.push('/search')
        }
    }
    Keydown = ( event ) => {
        if(event.keyCode === 13 && this.state.text){
            this.changeValue(this.state.radio, this.state.text)
            this.props.history.push('/search')
        }
    }
    render() {
        return (
            <div className="index-head-search">
                <input 
                    type="radio" 
                    name="search" 
                    value="course" 
                    id="searchCourse" 
                    checked={ this.state.radio?true:false }
                    onChange={ this.getRadio }
                />
                <label htmlFor="searchCourse">课程</label>
                <input type="radio" name="search" value="agency" id="searchAgency" 
                    checked={ this.state.radio?false:true }
                    onChange={ this.getRadio }
                /><label htmlFor="searchAgency">机构</label>

                <input type="text" placeholder="请输入课程/机构名称" 
                    value={ this.state.text }
                    onChange={ this.getText }
                    onKeyDown={ this.Keydown }
                />
                <i className="ion-ios-search-strong"
                    onClick={ this.Jump }
                ></i>
            </div>
        );
    }
}


export default withRouter(HeadSearch);
