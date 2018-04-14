import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './page/Home.js';
import AgencyList from './page/AgencyList.js';
import ParentClassList from './page/ParentClassList.js';
import ChildClassList from './page/ChildClassList.js';
import AboutUs from './page/AboutUs.js';
import Banner from './component/public/Banner.js';
import NoMatch from './component/public/NoMatch.js';
import PublicHead from './component/public/PublicHead.js';
import PublicFoot from './component/public/PublicFoot.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <PublicHead />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/agencyList" component={ AgencyList } />
                    <Route path="/parentClassList" component={ ParentClassList } />
                    <Route path="/childClassList" component={ ChildClassList } />
                    <Route path="/byStages" render={()=><Banner>好学分期</Banner>} />
                    <Route path="/aboutUs" component={ AboutUs } />
                    <Route component={ NoMatch } />
                </Switch>
                <PublicFoot />
            </div>
        );
    }
}

export default App;

