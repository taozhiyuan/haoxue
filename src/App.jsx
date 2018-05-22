import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
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
import NoMatch from '@/component/public/NoMatch.jsx';
import PublicHead from '@/component/public/PublicHead.jsx';
import PublicFoot from '@/component/public/PublicFoot.jsx';
import Loading from '@/component/public/Loading.jsx';
import { inject, observer } from 'mobx-react';
import Axios from './global/axios.js';
// @inject('search')

// @observer
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : null
        }
    }
    componentWillMount(){
        Promise.all([
            Axios.parentClassList(),
            Axios.contentType({ classifyType : 'child' }),
            Axios.contentType({ classifyType : 'parent' })
        ]).then(([l,c,p])=>{
            this.setState({
                data : {
                    child : {
                        couseList : this.computedData(l.data.result, 'child'),
                        class : [
                            { id: 0, typeName : "全部" },
                            ...c.data.result
                        ]
                    },
                    parent : {
                        couseList : this.computedData(l.data.result, 'parent'),
                        class : [
                            { id: 0, typeName : "全部" },
                            ...p.data.result
                        ]
                    }
                }
            })
            window.document.getElementById('first-loading').className = "hidden";
        })
    }
    computedData = ( data, type ) => {
    	return data.filter(
			item => item.courseType === type
		);
    }
    render() {
        const { data } = this.state;
        if(!data){ return false }
        return (
            <div className="App">
                <PublicHead />
                <section className="public-body">
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route path="/agencyList" component={ AgencyList } />
                        <Route path="/parentClassList" render={ 
                            ({ match })=> <ParentClassList data={ data.parent } match={ match } /> } 
                        />
                        <Route path="/childClassList" render={ 
                            ({ match })=> <ChildClassList data={ data.child } match={ match } /> } 
                        />
                        <Route path="/byStages" component={ ByStages } />
                        <Route path="/aboutUs" component={ AboutUs } />
                        <Route path="/userEntry" component={ UserEntry } />
                        <Route path="/personData" component={ PersonData } />
                        <Route path="/search" component={ Search } />
                        <Route path="/information" component={ Information } />
                        <Route component={ NoMatch } />
                    </Switch>
                    <Loading />
                </section>
                <PublicFoot />
            </div>
        );
    }
}

export default App;