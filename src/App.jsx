import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './page/Home.jsx';
import './App.css';
import AgencyList from './page/agency/AgencyList.jsx';
import ByStages from './page/byStages/ByStages.jsx';
import ParentClassList from './page/course/ParentClassList.jsx';
import ChildClassList from './page/course/ChildClassList.jsx';
import PersonData from './page/PersonData.jsx';
import UserEntry from './page/UserEntry.jsx';
import AboutUs from './page/AboutUs.jsx';
import Search from './page/Search.jsx';
import Information from './page/information/Information.jsx';
import Banner from './component/public/Banner.jsx';
import NoMatch from './component/public/NoMatch.jsx';
import PublicHead from './component/public/PublicHead.jsx';
import PublicFoot from './component/public/PublicFoot.jsx';

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
                        <Route path="/byStages" component={ ByStages } />
                        <Route path="/aboutUs" component={ AboutUs } />
                        <Route path="/userEntry" component={ UserEntry } />
                        <Route path="/personData" component={ PersonData } />
                        <Route path="/search" component={ Search } />
                        <Route path="/information" component={ Information } />
                        <Route component={ NoMatch } />
                    </Switch>
                </section>
                <PublicFoot />
            </div>
        );
    }
}

export default App;