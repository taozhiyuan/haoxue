import Link from 'next/link';
import React, { Component } from 'react';
import Position from './header/Position.jsx';
import Search from './header/Search.jsx';
import LoginBefore from './header/LoginBefore';
import Nav from './header/Nav.jsx';
import LoginAfter from './header/LoginAfter.jsx';

export default class Header extends Component {
    state = {
        login : false
    }
    render(){
        const { login } = this.state;
        return (
            <header className="public">
                <div className="main-public">
                    <Link href="/">
                        <a><img src='/static/img/public/logo.png' className="head-logo" alt="" /></a>
                    </Link>
                    <Position />
                    <Search />
                    <Nav />
                    { login ? <LoginAfter /> : <LoginBefore setVisibi={ this.props.setVisibi } /> }
                </div>
                <style jsx global>{`
                    header.public {
                        height : 80px;
                        background-color : white;
                        font-size : 0;
                        position : relative;
                        z-index : 9;
                        border-bottom : 1px solid #ddd;
                    }
                        header.public * {
                            vertical-align : top;
                        }
                        header.public img.head-logo {
                            width : auto;
                            height : auto;
                            height : 35px;
                            margin-top : 20px;
                            margin-right : 20px;
                        }
                        header.public > div.main-public > div {
                            display: inline-block;
                        }
                `}</style>
        </header>
        )
    }
}