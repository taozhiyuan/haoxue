import React, { Component } from 'react';
import './Nav.css';
import Path from './Path.js';

export default class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : {
                area : ['全部','岳麓区','天心区','雨花区','芙蓉区'],
            },
            conClass : [
                "全部",
                "早期教育",
                "兴趣爱好",
                "职业发展",
                "文体艺术",
                "课外辅导",
                "美容健身",
                "健康心理",
                "其他"
            ],
            sort : ['综合排序','按规模','按人气'],
            classActive : 0,
            areaActive : 0,
            sortActive : 0
        }
    };
    clickClass = (parame) => {
        this.setState({
            classActive : parame
        })
    }
    clickArea = (parame) => {
        this.setState({
            areaActive : parame
        })
    }
    clickSort = (parame) => {
        this.setState({
            sortActive : parame
        })
    }
    render(){
        return (
            <div className="mechanism-nav">
                <Path />
                <h4 className="mechanism-class">
                    内容分类：
                    <ul className="class-item">
                    { this.state.conClass.map((item,index)=>(
                        <li key={ index }
                            onClick={ ()=>{ this.clickClass(index) } }
                            className={ this.state.classActive===index?"active":null }
                        >{ item }</li>
                    )) }
                    </ul>
                </h4>
                <h4 className="mechanism-class">
                    区域：
                    <ul className="class-item">
                    {this.state.data.area.map((item,index)=>(
                        <li key={ index }
                        onClick={ ()=>{ this.clickArea(index) } }
                        className={ this.state.areaActive===index?"active":null }
                    >{ item }</li>
                    ))}
                    </ul>
                </h4>
                <ul className="mechanism-sort">
                    {this.state.sort.map((item,index)=>(
                        <li key={ index }
                            onClick={ ()=>{ this.clickSort(index) } }
                            className={ this.state.sortActive===index?"active":null }
                        >
                            <i className={ this.state.sortActive===index?"ion-arrow-down-b":"ion-arrow-up-b" }></i>
                            { item }
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}