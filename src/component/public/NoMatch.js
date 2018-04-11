import React, { Component } from 'react';

export default class NoMatch extends Component {
    render(){
        const style = {
            height : 500,
            lineHeight : "500px",
            fontSize : 25,
            textAlign : "center"
        }
        return (
            <div style={ style }>未匹配到您提供的地址</div>
        );
    }
}