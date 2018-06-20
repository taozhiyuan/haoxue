import React, { Component } from 'react';

export default class NotFind extends Component {
    render(){
        return (
            <article>
                <img src="/static/img/public/not_find.png" alt=""/>
                <style jsx>{`
                    article {
                        width : 330px;
                        height : 260px;
                        margin : 150px auto;
                    }
                `}</style>
            </article>
        )
    }
}