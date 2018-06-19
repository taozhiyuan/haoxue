import React, { Component } from 'react'

export default class Layout extends Component {
    render(){
        return(
            <section>
                <div>
                    <aside><img src="/static/img/public/login.png" alt=""/></aside>
                    { this.props.children }
                </div>
                <style jsx>{`
                    section {
                        background-color : rgba(0, 0, 0, 0.5);
                        position : fixed;
                        width : 100%;
                        height : 100%;
                        left : 0px;
                        top : 0px;
                        z-index : 9;
                    }
                        div {
                            width : 840px;
                            height : 400px;
                            background-color : #FFF;
                            margin : -200px auto 0px;
                            position : relative;
                            top : 50%;
                            box-shadow: 0px 0px 10px #555;
                        }
                            aside {
                                width : 340px;
                                height : 100%;
                                display: inline-block;
                            }
                `}</style>
            </section>
        )
    }
}
