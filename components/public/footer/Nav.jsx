import React, { Component } from 'react'
import Link from 'next/link';

export default class Nav extends Component {
    render(){
        return(
            <nav>
                <Link href="/"><a>分期服务</a></Link>
                <Link href="/"><a>关于我们</a></Link>
                <Link href="/"><a>公司资质</a></Link>
                <Link href="/"><a>品牌文化</a></Link>
                <Link href="/"><a>愿景理念</a></Link>
                <Link href="/orgEntry"><a>机构入驻</a></Link>
                <style jsx>{`
                    nav {
                        color : #505b64;
                        font-size : 14px;
                        margin-top : 45px;
                    }
                        nav > a {
                            display: inline-block;
                            padding : 0px 30px;
                        }
                        nav > a:first-child {
                            padding-left : 0px;
                        }
                        nav > a:not(:last-child){
                            border-right : 1px solid #505b64;
                        }
                        nav > a:hover {
                            color : #f5a00a;
                        }
                `}</style>
            </nav>
        )
    }
}
