import React, { Component } from 'react'
import AgencyItem from './AgencyItem.jsx'
import NotFind from '../search/NotFind'
import Loading from '../public/Loading'

export default class List extends Component {
    render(){
        const { data, paging, number } = this.props;
        if(!data){ return <Loading /> }
        let pagingStart = paging * number - number; //起始点=页码*2-2
        let pagingEnd = paging * number; //结束点=页码*2
        const visibi = data.slice(pagingStart, pagingEnd); //切开课程列表，只显示2个
        if(data.length === 0) return <NotFind />;
        return(
            <ul>
                { visibi.map((item, index)=>(
                    <AgencyItem data={ item } key={ index } />
                )) }
                <style jsx>{`
                    ul {
                        background-color : #FFF;
                        border-radius : 5px;
                        padding : 10px;
                        overflow : hidden;
                        margin-top : 20px;
                    }
                `}</style>
            </ul>
        )
    }
}
