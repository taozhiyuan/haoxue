import React, { Component } from 'react'
import QRCode from './QRCode.jsx';
import Partner from './Partner.jsx';
import Nav from './Nav.jsx';

export default class Guild extends Component {
    render(){
        return(
            <div>
                <h3>全国客服：<span>400-068-0258</span></h3>
                <Partner />
                <Nav />
                <QRCode />
                <style jsx>{`
                    div {
                        height : 300px;
                    }
                        h3 {
                            color : #859099;
                            padding-top : 52px;
                        }
                            span {
                                font-size : 24px;
                                font-weight : bold;
                            }
                `}</style>
            </div>
        )
    }
}
