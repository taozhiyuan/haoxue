import React, { Component } from 'react'

export default class Filter extends Component {
    state = {
        type : ["全部", "英语", "美术", "舞蹈"],
        typeTarget : 0,
        area : ["全部", "岳麓区", "雨花区", "天心区"],
        areaTarget : 0,
    }
    typeTarget = (parame) => {
        this.setState({ typeTarget : parame })
    }
    areaTarget = (parame) => {
        this.setState({ areaTarget : parame })
    }
    render(){
        const { type, area, typeTarget, areaTarget } = this.state;
        const { data } = this.props;
        return(
            <nav>
                <h5>
                    <span>分类：</span>
                    <ul>
                        { data.map((item, index)=>(
                            <li key={ index }
                                onClick={ ()=>{ this.typeTarget(index) } }
                                className={ typeTarget === index ? "active" : null }
                            >{ item.typeName }</li>
                        )) }
                    </ul>
                </h5>
                <h5>
                    <span>区域：</span>
                    <ul>
                        { area.map((item, index)=>(
                            <li key={ index }
                                onClick={ ()=>{ this.areaTarget(index) } }
                                className={ areaTarget === index ? "active" : null }
                            >{ item }</li>
                        )) }
                    </ul>
                </h5>
                <style jsx>{`
                    nav {
                        background-color : #FFF;
                        border-radius : 5px;
                        padding : 0px 20px;
                    }
                        nav > h5:not(:last-child){
                            border-bottom : 1px dashed #ddd;
                        }
                        h5 {
                            line-height : 50px;
                            font-size : 14px;
                        }
                            span {
                                color : #999;
                            }
                            ul {
                                display: inline-block;
                                color : #666;
                            }
                                ul > li {
                                    display: inline-block;
                                    padding : 0px 15px;
                                    cursor : pointer;
                                }
                                ul > li:hover {
                                    color : #f5a00a;
                                }
                                ul > li.active {
                                    color : #f5a00a;
                                }
                `}</style>
            </nav>
        )
    }
}
