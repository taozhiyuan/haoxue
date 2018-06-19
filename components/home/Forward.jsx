import React, { Component } from 'react'

export default class Forward extends Component {
    render(){
        return(
            <section>
                <div className="main-public">
                    <ul>
                        <li><img src="/static/img/home/Forward_1.png" alt=""/></li>
                        <li><img src="/static/img/home/Forward_2.png" alt=""/></li>
                        <li><img src="/static/img/home/Forward_3.png" alt=""/></li>
                        <li><img src="/static/img/home/Forward_5.png" alt=""/></li>
                    </ul>
                </div>
                <style jsx>{`
                    ul {
                        overflow : hidden;
                        margin-top : 20px;
                        margin-bottom : 20px;
                    }
                        li {
                            height : 120px;
                            width : 285px;
                            float : left;
                            cursor : pointer;
                        }
                        li:not(:last-child){
                            margin-right : 20px;
                        }
                        li:hover {
                            opacity : 0.8;
                        }
                `}</style>
            </section>
            
        )
    }
}
