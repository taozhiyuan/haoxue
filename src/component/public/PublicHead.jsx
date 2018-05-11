import React, { Component } from 'react';
import HeadSearch from './header/HeadSearch.jsx';
import LoggedInSuccess from './header/LoggedInSuccess.jsx';
import NavMenu from './header/NavMenu.jsx';
import NotLoggedIn from './header/NotLoggedIn.jsx';
import ChoiceCity from './header/ChoiceCity.jsx';
import logo from '../../img/logo.png';
import './PublicHead.css';

export default class PublicHead extends Component {
    render() {
        const token = sessionStorage.getItem("access_token");
        return (
            <header className="index-public-head">
                <div className="main-public">
                    <img className="logo" src={ logo } alt="logo"/>
                    <NavMenu />
                    <ChoiceCity />
                    <HeadSearch />
                    { token ? <LoggedInSuccess /> : <NotLoggedIn /> }
                </div>
            </header>
        );
    }
}
