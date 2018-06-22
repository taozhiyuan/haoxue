import React, { Component } from 'react'
import Link from 'next/link';

export default class organHome extends Component {
    render(){
        return(
            <div>
                <Link href="/"><a>机构免费入驻</a></Link>
                <h6>申请到开通1个工作日内</h6>
                <style jsx>{`
                    div {
                        width: 100%;
                        background: url(/static/img/organ/organHome-banner.png);
                        height: 400px;
                        position: relative;
                        overflow: hidden;
                        background-size: auto 100%;
                        background-position : center;
                        background-color : #3e3a4b;
                        text-align: center;
                    }
                        div > a {
                            display: inline-block;
                            padding: 12px 72px;
                            color: #fefefe;
                            font-size: 16px;
                            background-color: #f5a00a;
                            border-radius: 20px;
                            margin-top: 259px;
                        }
                        div > h6 {
                            font-size: 12px;
                            color: #f5a00a;
                            line-height : 40px;
                        }
                `}</style>
            </div>
        )
    }
}