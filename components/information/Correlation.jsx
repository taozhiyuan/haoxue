import React, { Component } from 'react'
import Link from 'next/link'

export default class Correlation extends Component {
    state = {
        data : [1,1,1,2,2,2,2,2,2]
    }
    render(){
        const { data } = this.props;
        return(
            <div>
                <h3>相关新闻</h3>
                <ul>
                    { data.map((item, index)=>(
                        <li key={ index }>
                            <Link href={{ 
                                pathname : "/infoDetails", 
                                query : { id : item.id } }}
                            >
                                <a className="ellipsis">{ item.articleTitle }</a>
                            </Link>
                        </li>
                    )) }
                    
                </ul>
                <style jsx>{`
                    h3 {
                        font-size : 20px;
                        line-height : 40px;
                        color : #666;
                    }
                    ul {
                        overflow : hidden;
                        list-style-type: disc;
                        padding-left : 20px;
                    }
                        ul > li:nth-child(odd){
                            margin-right : 10%;
                        }
                        li {
                            width : 45%;
                            float : left;
                            font-size : 14px;
                            color : #666;
                            line-height : 25px;
                        }
                `}</style>
            </div>
        )
    }
}
