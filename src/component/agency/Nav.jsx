import React, { Component } from 'react';
import './Nav.css';
import { Route } from "react-router-dom";

export default class Nav extends Component {
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
            classActive : this.props.type,
            areaActive : this.props.area,
            sortActive : this.props.sortId
        }
    }
    clickClass = (parame, id) => {
        this.setState({
            classActive : parame
        })
        this.props.getType(id)
    }
    clickArea = (parame, id) => {
        this.setState({
            areaActive : parame
        })
        this.props.getArea(id)
    }
    clickSort = (parame) => {
        this.setState({
            sortActive : parame
        })
        this.props.getSort(parame)
    }
    render(){
        const { area, classActive, areaActive, sortActive } = this.state;
        const { sortText, classType } = this.props;
        return (
            <div className="mechanism-nav">
                <h4 className="mechanism-class">
                    内容分类：
                    <ul className="class-item">
                    { classType.map((item,index)=>(
                        <li key={ index }
                            onClick={ ()=>{ this.clickClass(index, item.id) } }
                            className={ classActive===index?"active":null }
                        >{ item.typeName }</li>
                    )) }
                    </ul>
                </h4>
                <Route exact path="/childClassList" render={ ()=>(
                    <h4 className="mechanism-class">
                        区&emsp;&emsp;域：
                        <ul className="class-item">
                        {area.map((item,index)=>(
                            <li key={ index }
                            onClick={ ()=>{ this.clickArea(index, item.id) } }
                            className={ areaActive===index?"active":null }
                        >{ item.name }</li>
                        ))}
                        </ul>
                    </h4>
                ) } />
                
                <ul className="mechanism-sort">
                    {sortText.map((item,index)=>(
                        <li key={ index }
                            onClick={ ()=>{ this.clickSort(index,item.id) } }
                            className={ sortActive===index?"active":null }
                        >
                            <i className={ sortActive===index?"ion-arrow-down-b":"ion-arrow-up-b" }></i>
                            { item }
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}