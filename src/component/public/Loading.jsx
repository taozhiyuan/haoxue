import React, { Component } from 'react';
import './Loading.css';
import { inject, observer } from 'mobx-react';
@inject('Interactive')

@observer
export default class Loading extends Component {
    constructor(props){
        super(props)
        this.interactive = this.props.Interactive;
    }
    render() {
        const { loading } = this.interactive;
        console.log(loading)
        return (
            <div className={ loading ? 'request-loading' : 'request-loading-hidden' }>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
            </div>
        );
    }
}

