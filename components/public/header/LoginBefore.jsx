import React, { Component } from 'react';

export default class LoginBefore extends Component {
    render(){
        return (
            <ul>
                <li onClick={ ()=>{ this.props.setVisibi('sigin') } }>登录</li>
                <li onClick={ ()=>{ this.props.setVisibi('login') } }>注册</li>
                <style jsx>{`
                    ul {
                        display: inline-block;
                        font-size : 12px;
                        border-radius : 3px;
                        border : 1px solid #f5a00a;
                        margin-top : 25px;
                    }
                        ul > li {
                            display: inline-block;
                            width : 60px;
                            line-height : 30px;
                            text-align : center;
                            color : #f5a00a;
                            cursor : pointer;
                        }
                        ul > li:first-child {
                            background-color : #f5a00a;
                            color : #FFF;
                        }
                `}</style>
            </ul>
        )
    }
}