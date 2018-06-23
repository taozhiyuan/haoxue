import React, { Component } from 'react'

export default class Layout extends Component {
    render(){
        const { name, winName, setVisibi } = this.props;
        return(
            <section>
                <div>
                    <p>{ name }
                        <i 
                            className="icon ion-md-close" 
                            onClick={ ()=>{ setVisibi(winName) } }
                        />
                    </p>
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
                            width : 600px;
                            height : 400px;
                            background-color : #FFF;
                            margin : -200px auto 0px;
                            position : relative;
                            top : 50%;
                            box-shadow: 0px 0px 10px #555;
                            text-align : center;
                            padding : 50px 159px;
                        }
                            p {
                                line-height : 20px;
                                color : #f5a00a;
                                font-size : 18px;
                                position : absolute;
                                top : 25px;
                                left : 0px;
                                width : 100%;
                                padding : 0px 20px;
                                text-align : left;
                            }
                            p::after {
                                content : "";
                                position : absolute;
                                top : 0px;
                                left : 0px;
                                height : 20px;
                                width : 3px;
                                background-color : #f5a00a;
                            }
                                p > i {
                                    font-size : 24px;
                                    position : absolute;
                                    top : -3px;
                                    right : 20px;
                                    cursor : pointer;
                                }
                `}</style>
            </section>
        )
    }
}
