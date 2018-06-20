import React, { Component } from 'react'
import region from '../../static/region';

export default class Filter extends Component {
    state = {
        typeTarget : 0,
        area : ["全部", "岳麓区", "雨花区", "天心区"],
        areaTarget : 0,
    }
    componentDidMount(){
        this.setState({ area : [{id : 0, name : '全部'}, ...this.filterArea[0].area] })
    }
    get filterArea(){
    	return region.filter(
			item => item.id === "430000"
        )[0].city.filter( item => item.id === "430100" );
        
    }
    typeTarget = (index, id) => {
        this.setState({ typeTarget : index })
        this.props.getType(id)
    }
    areaTarget = (index, id) => {
        this.setState({ areaTarget : index })
        this.props.getArea(id)
    }
    render(){
        const { area, typeTarget, areaTarget } = this.state;
        const { data } = this.props;
        return(
            <nav>
                <h5>
                    <span>分类：</span>
                    <ul>
                        { data.map((item, index)=>(
                            <li key={ index }
                                onClick={ ()=>{ this.typeTarget(index, item.id) } }
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
                                onClick={ ()=>{ this.areaTarget(index, item.id) } }
                                className={ areaTarget === index ? "active" : null }
                            >{ item.name }</li>
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
