import React, { Component } from 'react'
import Link from 'next/link';
import QRCode from './QRCode.jsx';

export default class Partner extends Component {
    render(){
        return(
            <ul>
                <li><img src="/static/img/public/guild_1.png" alt=""/></li>
                <li><img src="/static/img/public/guild_2.png" alt=""/></li>
                <li><img src="/static/img/public/guild_3.png" alt=""/></li>
                <li><img src="/static/img/public/guild_4.png" alt=""/></li>
                <style jsx>{`
                    ul {
                        padding-top : 45px;
                    }
                        li {
                            display: inline-block;
                            height : 50px;
                        }
                        li:not(:last-child){
                            margin-right : 20px;
                        }
                            li > img {
                                width : auto;
                            }
                `}</style>
            </ul>
        )
    }
}
