import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './page/Home.js';
import Agency from './page/Agency.js';
import ParentClass from './page/ParentClass.js';
import ChildClass from './page/ChildClass.js';
import Banner from './component/public/Banner.js';
import NoMatch from './component/public/NoMatch.js';
import PublicHead from './component/public/PublicHead.js';
import PublicFoot from './component/public/PublicFoot.js';

class App extends Component {
    render() {
        return (
        <Router>
            <div className="App">
                <PublicHead />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/agency" component={ Agency } />
                    <Route path="/parentClass" component={ ParentClass } />
                    <Route path="/childClass" component={ ChildClass } />
                    <Route path="/byStages" render={()=><Banner>好学分期</Banner>} />
                    <Route path="/about" render={()=><Banner>关于我们</Banner>} />
                    <Route component={ NoMatch } />
                </Switch>
                <PublicFoot />
            </div>
        </Router>
        );
    }
}

export default App;

