
// 首页 ==》 资讯干货
import React, { Component } from 'react';
import './Information.css';
import NewsInformation from './NewsInformation.jsx';

import Axios from '../../global/axios.js';

export default class Information extends Component {
    constructor(){
        super()
        this.state = {
            data : null
        }
    }
    componentWillMount(){
        Promise.all([
            Axios.homeInformation({articleType : '2'}),
            Axios.homeInformation({articleType : '3'}),
            Axios.homeInformation({articleType : '4'}),
        ]).then(([w,c,t])=>{
            this.setState({
                data : {
                    woman : w.data.result,
                    child : c.data.result,
                    teacher : t.data.result,
                }
            })
        })
    }
    
    render() {
        const { data } = this.state;
        if(!data) { return false }
        return (
            <section className="home-information">
                <div className="main-public">
                    {/* <h5 className="home-information-title">资讯干货</h5> */}
                    <NewsInformation data={ data.woman } title={{ name : "女性心理", more : "/information" }}/>
                    <NewsInformation data={ data.child } title={{ name : "育儿宝典", more : "/information" }}/>
                    <NewsInformation data={ data.teacher } title={{ name : "名师专栏", more : "/information" }}/>
                </div>
            </section>
        );
    }
}