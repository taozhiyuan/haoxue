import React, { Component } from 'react';
import Item from './Item.jsx';
import './List.css';
import Paging from '@/component/public/Paging.jsx';

export default class List extends Component {
    constructor(){
        super()
        this.state = {
            paging : 1,
            number : 8
        }
    }
    PagingCallback = (param) => {
        this.setState({
            paging : param
        })
    }
    componentWillReceiveProps(){
        this.setState({
            paging : 1
        })
    }
    render(){
        const { data } = this.props;
        const { paging, number } = this.state;
        if(!data){ return false }
        let pagingStart = paging * number - number; //起始点=页码*2-2
        let pagingEnd = paging * number; //结束点=页码*2
        const visibi = data.slice(pagingStart, pagingEnd); //切开课程列表，只显示2个
        return (
            <div className="">
                <ul className="parentClass-list">
                    {visibi.map((item,index)=>(
                        <Item data={ item } key={ index } to={ `${this.props.url}/course` } />
                    ))}
                </ul>
                <Paging 
                    length={ Math.ceil(data.length/number) }
                    PagingCallback={ this.PagingCallback }
                />
            </div>
        );
    }
}