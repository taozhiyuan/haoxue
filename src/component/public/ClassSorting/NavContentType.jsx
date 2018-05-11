import React, { Component } from 'react';
import './NavContentType.css';

export default class NavContentType extends Component {
    constructor(props){
        super(props)
        this.state = {
            classActive : 0
        }
    }
    clickClass = (parame, id) => {
        this.setState({
            classActive : parame
        })
        this.props.getType(id)
    }
    render(){
        const { classActive } = this.state;
        const { classType } = this.props;
        return (
            <h4 className="nav-content-type">
                内容分类：
                <ul>
                { classType.map((item,index)=>(
                    <li key={ index }
                        onClick={ ()=>{ this.clickClass(index, item.id) } }
                        className={ classActive === index?"active":null }
                    >{ item.typeName }</li>
                )) }
                </ul>
            </h4>
        );
    }
}