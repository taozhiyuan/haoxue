
import React, { Component } from 'react';
import Active from './Active';

export default class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuPara : [
                { text : "首  页", path : "/", to : "/", active : "home-link" },
                { text : "好课程", path : "/courseList/:bar*", to : "/courseList" },
                { text : "好机构", path : "/agencyList/:bar*", to : "/agencyList" },
                { text : "关于我们", path : "/aboutUs/:bar*", to : "/aboutUs" }
            ]
        }
    };
    render(){
        return (
            <nav>
                { this.state.menuPara.map(( item, index ) => (
                    <Active 
                        activeClassName='active'
                        href={ item.to }
                        key={ index }
                    >
                        <a className='nav-link'>{ item.text }</a>
                    </Active>
                ))}
                <style jsx>{`
                    nav {
                        font-size : 14px;
                        margin-right : 10px;
                        display: inline-block;
                    }
                        nav > a {
                            display: inline-block;
                            width 80px;
                            line-height : 80px;
                            text-align : center;
                        }
                        nav > a:hover {
                            color : #f5a00a;
                        }
                        nav > a.active {
                            color : #f5a00a;
                            position : relative;
                            background-color : #fef5e6;
                        }
                        nav > a.active::before {
                            content : "";
                            position : absolute;
                            left : 0;
                            bottom : 0;
                            height : 2px;
                            width : 100%;
                            background-color : #f5a00a;
                        }
                `}</style>
            </nav>
        )
    }
}