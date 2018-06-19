import React, { Component } from 'react'
import Guild from './footer/Guild.jsx';
import Copyright from './footer/Copyright.jsx';

export default class Footer extends Component {
    render(){
        return(
            <footer>
                <div className="main-public">
                    <Guild />
                </div>
                <Copyright />
                <style jsx>{`
                    footer {
                        background-color : #22292f;
                        margin-top : 20px;
                    }
                `}</style>
            </footer>
        )
    }
}
