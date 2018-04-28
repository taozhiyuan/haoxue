import React, { Component } from 'react';
import './Popup.css';

export default class Popup extends Component {
    render() {
        return (
            <aside className="popup">
                <h4>
                    { this.props.state? 
                        <i className="ion-ios-checkmark-outline"></i>:
                        <i className="ion-ios-close-outline"></i>
                    }
                    { this.props.children }
                </h4>
            </aside>
        );
    }
}

