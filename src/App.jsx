import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from './page/Home.jsx';
import AgencyList from './page/AgencyList.jsx';
import ParentClassList from './page/ParentClassList.jsx';
import ChildClassList from './page/ChildClassList.jsx';
import PersonData from './page/PersonData.jsx';
import UserEntry from './page/UserEntry.jsx';
import AboutUs from './page/AboutUs.jsx';
import Banner from './component/public/Banner.js';
import NoMatch from './component/public/NoMatch.js';
import PublicHead from './component/public/PublicHead.js';
import PublicFoot from './component/public/PublicFoot.js';

import PropTypes from'prop-types';
import Axios from './request/axiosHome.js';
// import { observer } from 'mobx-react';

// @observer
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            response: false
        }
        sessionStorage.setItem("imgPrefix", "http://hxj-oss-bucket.oss-cn-shenzhen.aliyuncs.com/");
    }
    // getChildContext() {
    //     return { 
    //         classType: this.state.classType,
    //         courseList : this.state.courseList,
    //         // AgencyList : this.state.AgencyList,
    //         imgPrefix : "http://hxj-oss-bucket.oss-cn-shenzhen.aliyuncs.com/",
    //     };
    // }
    componentWillMount(){
        // Axios.parentClassList().then((res)=>{
        //     this.setState({
        //         response: true
        //     })
        //     let parentArr = [];
        //     let childArr = [];
        //     for( let i of res.data.result ){
        //         if(i.courseType==="parent"){
        //             parentArr = [...parentArr,i]
        //         }else{
        //             childArr = [...childArr,i]
        //         }
        //     }
        //     sessionStorage.setItem("parentList", parentArr);
        //     sessionStorage.setItem("childList", childArr);
        // })
        // sessionStorage.setItem("nickname", '90');
        // //类型分类 
        // Axios.contentType().then((res)=>{
        //     this.setState({
        //         classType : res.data.result
        //     })
        //     // this.props.store.getData(res.data.result)
        // })
        // //课程列表
        // Axios.parentClassList().then((res)=>{
        //     this.setState({
        //         courseList : res.data.result
        //     })
        //     console.log(res.data.result)
        // })
        // //机构列表
        // Axios.MechanismList().then((res)=>{
        //     this.setState({
        //         AgencyList : res.data.result
        //     })
        // })
    }
    render() {
        // const AboutUsRouter = withRouter(AboutUs);
        // if( !this.state.response ){ return false }
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
                    <Route path="/userEntry" component={ UserEntry } />
                    <Route path="/personData" component={ PersonData } />
                    <Route component={ NoMatch } />
                </Switch>
                <PublicFoot />
            </div>
        );
    }
}

// App.childContextTypes = {
//     classType: PropTypes.array,
//     courseList : PropTypes.array,
//     // AgencyList : PropTypes.array,
//     imgPrefix : PropTypes.string,
// };

export default withRouter(App);