import React, { Component } from 'react'
import Link from 'next/link'

export default class Title extends Component {
    render(){
        const { name, url } = this.props;
        return(
            <p>
                <span>{ name }</span>
                { url && <Link href={ url }>
                    <a>
                        <span>More</span>&nbsp;
                        <i className="icon ion-md-add"></i>
                    </a>
                </Link> }
                <style jsx>{`
                    p {
                        line-height : 50px;
                        position : relative;
                        border-bottom : 1px solid #eee;
                        margin: 0px 10px;
                    }
                        p > span {
                            color : #f5a00a;
                            font-size : 18px;
                        }
                        p > span::after {
                            content : "";
                            position : absolute;
                            left : -20px;
                            top : 17px;
                            height : 20px;
                            width : 3px;
                            background-color : #f5a00a;
                        }
                        p > a {
                            display: block;
                            line-height : 50px;
                            position : absolute;
                            top : 0px;
                            right : 0px;
                            font-size : 14px;
                        }
                            p > a > span {
                                color : #999;
                            }
                            p > a > i {
                                font-size : 16px;
                                color : #f5a00a;
                            }
                `}</style>
            </p>
        )
    }
}
