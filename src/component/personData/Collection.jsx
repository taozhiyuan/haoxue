
// 我的收藏
import React, { Component } from 'react';
import Paging from '../public/Paging.jsx';
import CourseItem from './CourseItem.jsx';
import AgencyItem from './AgencyItem.jsx';
import './Collection.css';
import Axios from '../../global/axios.js';

export default class Collection extends Component {
    constructor(){
        super()
        this.state = {
            type : ['课程','教育机构'],
            typeActive : 0,
            data : {
                course : [],
                agency : []
            },
            paging : 1,
        }
    }
    componentWillMount(){
        Axios.Collection({
            access_token : sessionStorage.getItem("access_token")
        }).then((res)=>{
            let course = [];
            let agency = [];
            if(res.data.result instanceof Array){
                for (const iterator of res.data.result) {
                    if(iterator.collectionType === "2"){
                        course = [...course,iterator]
                    }else{
                        agency = [...agency,iterator]
                    }
                }
                this.setState({ data : {course,agency} })
            }else{
                console.log(res)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    typeClick = (parame) => {
        this.setState({
            typeActive : parame
        })
    }
    PagingCallback = (param) => {
        console.log(param)
        this.setState({
            paging : param
        })
    }
    render() {
        // const { path } = this.props.match;
        const { type, typeActive, data, paging } = this.state;
        let pagingStart = paging * 2 - 2; //起始点=页码*2-2
        let pagingEnd = paging * 2; //结束点=页码*2
        const course = data.course.slice(pagingStart, pagingEnd); //切开课程列表，只显示2个
        const agency = data.agency.slice(pagingStart, pagingEnd); //切开机构列表，只显示2个
        const dataLength = typeActive === 0 ? data.course.length : data.agency.length ;
        console.log(typeof dataLength)
        //如果当前类型是0(0代表课程，1代表机构)，则显示相应的页码数量
        return (
            <div className="my-collection">
                <h4 className="title">我的收藏</h4>
                <ul className="my-collection-type">
                    { type.map((item,index)=>(
                        <li
                            key={ index }
                            className={ typeActive===index?'active':null }
                            onClick={ ()=>{this.typeClick(index)} }
                        >{ item }</li>
                    )) }
                </ul>
                { typeActive ? <AgencyItem data={ agency }/> : <CourseItem data={ course } /> }
                { dataLength === 0 ? null : <Paging 
                    length={ Math.ceil(dataLength/2) }
                    PagingCallback={ this.PagingCallback }
                /> }
            </div>
        );
    }
}
