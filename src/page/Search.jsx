
// 搜索
import React, { Component } from 'react';
import NavSort from '../component/public/ClassSorting/NavSort.jsx';
import CourseItem from '../component/course/CourseItem.jsx';
import AgencyItem from '../component/agency/AgencyItem.jsx';
import NoSearch from '../component/search/NoSearch.jsx';

import Axios from '../global/axios.js';
import { inject, observer } from 'mobx-react';
@inject('search')

@observer
export default class Search extends Component {
    constructor(props){
        super(props)
        this.store = this.props.search;
        this.state = {
            data : null,
            radio : true,
            sortId : { index : 0, id : 0 },
            sort : ['synthesiss','scale','praise'],
            searchState : false
        }
    };
    request = () => {
        if(this.store.value){
            if(this.store.type){ //判断搜索的类型，决定请求的接口
                Axios.parentClassList({ courseName : this.store.value }).then((res)=>{
                    let courseArr = [];
                    if(res.data.result instanceof Array){
                        for (const iterator of res.data.result) {
                            if(iterator.courseType === "child"){
                                courseArr.push({
                                    ...iterator,
                                    link : "/childClassList"
                                })
                            }else{
                                courseArr.push({
                                    ...iterator,
                                    link : "/parentClassList"
                                })
                            }
                        }
                        this.setState({
                            data : courseArr
                        })
                    }
                })
            }else{
                Axios.MechanismList({ orgName : this.store.value }).then((res)=>{
                    this.setState({
                        data : res.data.result
                    })
                })
            }
        }
    }
    componentDidMount(){
        this.request()
    }
    componentWillReceiveProps(){
        this.setState({ data : null }) //在即将接收属性之前清除数据。
        this.request()
    }
    getSort = ( data ) => {
        this.setState({
            data
        })
    }
    render() {
        const { data } = this.state;
        return (
            <section className="search">
                <div className="main-public">
                    <nav className="nav-class-sorting">
                        <NavSort data={ data } getSort={ this.getSort }/>
                    </nav>
                    { data ? (this.store.type ? 
                        <ul className="agency-course-list">
                            { data.map((item, index)=>(
                                <CourseItem 
                                    url={ item.link }
                                    data={ item }
                                    key={ index }
                                />
                            )) }
                        </ul>:
                        <ul className="agency-course-list">
                            { data.map((item, index)=>(
                                <AgencyItem 
                                    url="/agencyList"
                                    data={ item }
                                    key={ index }
                                />
                            )) }
                        </ul>
                    ):<NoSearch />}
                </div>
            </section>
        );
    }
}