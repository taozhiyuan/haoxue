import React, { Component } from 'react';
import Link from 'next/link';

export default class LoginAfter extends Component {
    state = {
        active : false
    }
    Enter = () => {
        this.setState({ active : true })
    }
    Leave = () => {
        this.setState({ active : false })
    }
    signOut = () => {
        this.props.setVisibi('siginSucess')
        sessionStorage.removeItem('token')
    }
    render(){
        const { active } = this.state;
        return (
            <div
                onMouseEnter={ this.Enter }
                onMouseLeave={ this.Leave }
                className={ active ? "active" : null }
            >
                <Link href="/">
                    <a>
                        <span>个人中心</span>&nbsp;
                        <i className={`icon ion-ios-arrow-${ active ? "up" : "down" }`}></i>
                    </a>
                </Link>
                <ul>
                    <li><Link href="/">个人管理</Link></li>
                    <li><Link href="/">机构管理</Link></li>
                    <li onClick={ this.signOut }>退出登录</li>
                </ul>
                <style jsx>{`
                    div {
                        width : 110px;
                        line-height : 79px;
                        display: inline-block;
                        text-align : center;
                        font-size : 14px;
                        background-color : #FFF;
                    }
                    div.active {
                        color : #f5a00a;
                        box-shadow: 0px 0px 10px #c2c2c2;
                    }
                        div > a {
                            display: block;
                            height : 100%;
                        }
                        div > ul {
                            display: none
                        }
                        div.active > ul {
                            display: block;
                        }
                            ul > li {
                                line-height : 40px;
                                color : #999;
                                text-align : center;
                            }
                            ul > li:hover {
                                background-color : #f5a00a;
                                color : white;
                            }
                `}</style>
            </div>
        )
    }
}