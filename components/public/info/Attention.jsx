import React, { Component } from 'react';
import Title from '../Title.jsx';

export default class Attention extends Component {
    state = {
        data : [1,2,3,4,5]
    }
    render(){
        const { data } = this.state;
        return(
            <aside>
                <Title name="关注我们" />
                <div><img src="/static/img/public/WechatIMG29.jpeg" alt=""/></div>
                <style jsx>{`
                    aside {
                        width : 280px;
                        padding : 10px;
                        background : #FFF;
                        border-radius : 5px;
                        margin-top : 20px;
                    }
                        div {
                            width : 240px;
                            height : 240px;
                            margin : 10px;
                        }
                `}</style>
            </aside>
        )
    }
}
