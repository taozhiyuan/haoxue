import React, { Component } from 'react';
import './NavAreaType.css';
import { Route } from "react-router-dom";

export default class NavAreaType extends Component {
    constructor(props){
        super(props);
        this.state = {
            area : [
                { id: 0, name : "全部" },
                { id: "430102", name : "芙蓉区" },
                { id: "430103", name : "天心区" },
                { id: "430104", name : "岳麓区" },
                { id: "430105", name : "开福区" },
                { id: "430111", name : "雨花区" },
                { id: "430112", name : "望城区" },
                { id: "430121", name : "长沙县" },
                { id: "430124", name : "宁乡县" },
                { id: "430181", name : "浏阳市" },
            ],
            areaActive : 0
        }
    }
    clickArea = (parame) => {
        this.setState({
            areaActive : parame
        })
    }
    render(){
        const { area, areaActive } = this.state;
        return (
            <h4 className="nav-area-type">
                区&emsp;&emsp;域：
                <ul>
                { area.map((item, index)=>(
                    <li key={ index }
                        onClick={ ()=>{ this.clickArea(index) } }
                        className={ areaActive===index?"active":null }
                    >{ item.name }</li>
                )) }
                </ul>
            </h4>
        );
    }
}