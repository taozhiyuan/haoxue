
// 资讯列表
import React, { Component } from 'react';
import Path from '../../component/public/Path.jsx';
import InformationNav from '../../component/information/InformationNav.jsx';
import InformationList from '../../component/information/InformationList.jsx';
import Paging from '../../component/public/Paging.jsx'
import Details from './Details.jsx';
import Axios from '../../global/axios';
import { Route, Switch } from "react-router-dom";

export default class Information extends Component {
    constructor(){
        super()
        this.imgPrefix = sessionStorage.getItem("imgPrefix");
        this.state = {
            paging : 1,
            data : null
        }
    }
    componentDidMount(){
        window.scrollTo(0,0)
        this.request('2')
    }
    request = ( params ) => {
        Axios.homeInformation({ articleType : params }).then((res)=>{
            this.setState({
                data : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    getSort = ( param ) => {
        switch (param) {
            case 0:
                this.request('2')
                break;
            case 1:
                this.request('3')
                break;
            case 2:
                this.request('4')
                break;
            default:
                break;
        }
    }
    PagingCallback = (param) => {
        this.setState({
            paging : param
        })
    }
    render() {
        const { url } = this.props.match;
        const { data } = this.state;
        let dataLength = 20;
        return (
            <Switch>
                <Route path={ `${url}/details` } component={ Details } />
                <Route path={ url } render={ ({ match })=>(
                    <section className="information">
                        <div className="main-public">
                            <Path>资讯</Path>
                            <InformationNav getSort={ this.getSort }/>
                            <InformationList url={ match.url } data={ data } />
                            { data && <Paging 
                                length={ Math.ceil(data.length/2) }
                                PagingCallback={ this.PagingCallback }
                            /> }
                        </div>
                    </section>
                ) } />
            </Switch>
        );
    }
}