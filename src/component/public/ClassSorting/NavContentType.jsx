import React, { Component } from 'react';
import './NavContentType.css';

export default class NavContentType extends Component {
    constructor(props){
        super(props)
        this.state = {
            classActive : [{
                id : 0,
                typeName : "全部"
            },{
                id : 1,
                typeName : "父母教育"
            }]
        }
    }
    clickClass = (parame, id) => {
        this.setState({
            classActive : parame
        })
    }
    render(){
        const { classActive } = this.state;
        return (
            <h4 className="nav-content-type">
                内容分类：
                <ul>
                { classType.map((item,index)=>(
                    <li key={ index }
                        onClick={ ()=>{ this.clickClass(index, item.id) } }
                        className={ classActive===index?"active":null }
                    >{ item.typeName }</li>
                )) }
                </ul>
            </h4>
        );
    }
}