import React, { Component } from 'react'
import CourseItem from './CourseItem.jsx'

export default class List extends Component {
    render(){
        const { data } = this.props;
        return(
            <ul>
                { data.map((item, index)=>(
                    <CourseItem data={ item } key={ index } />
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
