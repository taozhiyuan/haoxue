import React, { Component } from 'react'
import AgencyItem from './AgencyItem.jsx'
import NotFind from '../search/NotFind'

export default class List extends Component {
    render(){
        const { data } = this.props;
        if(data.length === 0) return <NotFind />;
        return(
            <ul>
                { data.map((item, index)=>(
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
