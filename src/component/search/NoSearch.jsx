
// 没有搜到内容
import React, { Component } from 'react';
import no_search from './img/no_search.png';
import './NoSearch.css';

export default class NoSearch extends Component {
    render(){
        return (
            <div className="No-Search">
                <img src={ no_search } alt=""/>
            </div>
        );
    }
}