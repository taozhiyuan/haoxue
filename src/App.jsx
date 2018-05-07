import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './page/Home.jsx';
import './App.css';
import AgencyList from './page/AgencyList.jsx';
import ParentClassList from './page/ParentClassList.jsx';
import ChildClassList from './page/ChildClassList.jsx';
import PersonData from './page/PersonData.jsx';
import UserEntry from './page/UserEntry.jsx';
import AboutUs from './page/AboutUs.jsx';
import Search from './page/Search.jsx';
import Banner from './component/public/Banner.js';
import NoMatch from './component/public/NoMatch.js';
import PublicHead from './component/public/PublicHead.js';
import PublicFoot from './component/public/PublicFoot.js';

import Axios from './request/axiosHome.js';
// import { observer } from 'mobx-react';

// @observer
class App extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="App">
                <PublicHead />
                <section className="public-body">
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route path="/agencyList" component={ AgencyList } />
                        <Route path="/parentClassList" component={ ParentClassList } />
                        <Route path="/childClassList" component={ ChildClassList } />
                        <Route path="/byStages" render={()=><Banner>好学分期</Banner>} />
                        <Route path="/aboutUs" component={ AboutUs } />
                        <Route path="/userEntry" component={ UserEntry } />
                        <Route path="/personData" component={ PersonData } />
                        <Route path="/search" component={ Search } />
                        <Route component={ NoMatch } />
                    </Switch>
                </section>
                <PublicFoot />
            </div>
        );
    }
}

export default App;