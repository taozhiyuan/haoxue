import React, { Component } from 'react';

export default class Item extends Component {
    render(){
        const data = this.props.data;
        return (
            <li>
                <div>
                    <span>人气：{ data.popularity }</span>
                </div>
                <aside>
                    <h4>{ data.team }</h4>
                    <h5>地址:{ data.add }</h5>
                    <h5>咨询电话：{ data.tel }</h5>
                    <span>{ data.fabulous }</span>
                </aside>
            </li>
        );
    }
}