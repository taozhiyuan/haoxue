import React, { Component } from 'react'
import Layout from '../components/Layout.jsx'
import Path from '../components/public/Path.jsx'
import Filter from '../components/public/Filter.jsx'
import List from '../components/course/List.jsx'
import Paging from '../components/public/Paging.jsx'
import Error from 'next/error'
import axios from '../global/axios'
import { courseSelect } from '../global/navSort'

export default class CourseList extends Component {
    static async getInitialProps({ req }) {
        try {
            // const list = await axios.getAgencyCourseAll();//课程列表
            const type = await axios.getCommClassifyAll({ classifyType : 'parent' });//类型分类
            return {
                // data : list.data.result,
                type : [ { typeName : "全部", id : 0 }, ...type.data.result ],
                status : 200
            }
        }catch(err){
            if(!err.response) return { status : 404 }
            return { status : err.response.status }
        }
        
    }
    state = {
        paging : 1,
        number : 20,
        typeId : 0,
        areaId : 0,
        data : null,
        select : null
    }
    componentDidMount(){
        axios.getAgencyCourseAll().then((res)=>{
            this.setState({
                data : res.data.result,
                select : res.data.result
            })
        })
    }
    PagingCallback = (param) => {
        this.setState({
            paging : param
        })
    }
    componentWillReceiveProps(){
        this.setState({
            paging : 1
        })
    }
    getType = ( id ) => {
        const { areaId } = this.state;
        this.setState({
            typeId : id,
            select : courseSelect( areaId, id, 'courseClassify','area', this.state.data )
        });
    }
    getArea = ( id ) => {
        const { typeId } = this.state;
        this.setState({ 
            areaId : id,
            select : courseSelect( typeId, id, 'area','courseClassify', this.state.data )
        });
    }
    render(){
        const { type, status } = this.props;
        const { paging, number, data, select } = this.state;
        if ( status !== 200 ) {
            return <Error statusCode={ status } />
        }
        return(
            <Layout>
                <div className="main-public">
                    <Path prev={['课程']} target='全部' />
                    <Filter 
                        data={ type } 
                        getType={ this.getType }
                        getArea={ this.getArea }
                    />
                    <List data={ select } paging={ paging } number={ number }/>
                    { data && <Paging 
                        length={ Math.ceil(data.length/number) }
                        PagingCallback={ this.PagingCallback }
                    />}
                </div>
            </Layout>
        )
    }
}
