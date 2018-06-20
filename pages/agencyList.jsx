import React, { Component } from 'react'
import Layout from '../components/Layout.jsx'
import Path from '../components/public/Path.jsx'
import Filter from '../components/public/Filter.jsx'
import List from '../components/agency/List.jsx'
import Paging from '../components/public/Paging.jsx'
import Error from 'next/error'
import axios from '../global/axios'
import { orgSelect } from '../global/navSort'

export default class AgencyList extends Component {
    static async getInitialProps({ req }) {
        try {
            const list = await axios.getAgencyOrgAll();//机构列表
            const type = await axios.getCommClassifyAll({ classifyType : 'orgType' });//类型分类
            return {
                data : list.data.result,
                type : [ { typeName : "全部", id : 0 }, ...type.data.result ],
                status : 200
            }
        }catch(err){
            return { status : 404 }
        }
    }
    state = {
        paging : 1,
        number : 20,
        typeId : 0,
        areaId : 0,
        data : this.props.data
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
            data : orgSelect( areaId, id, 'orgClassifyArr','area', this.props.data )
        });
    }
    getArea = ( id ) => {
        const { typeId } = this.state;
        this.setState({ 
            areaId : id,
            data : orgSelect( typeId, id, 'orgClassifyArr','area', this.props.data )
        });
    }
    render(){
        const { type, status } = this.props;
        const { paging, number, data } = this.state;
        if(!data){ return false }
        let pagingStart = paging * number - number; //起始点=页码*2-2
        let pagingEnd = paging * number; //结束点=页码*2
        const visibi = data.slice(pagingStart, pagingEnd); //切开课程列表，只显示2个

        if ( status !== 200 ) {
            return <Error statusCode={ status } />
        }
        return(
            <Layout>
                <div className="main-public">
                    <Path prev={['机构']} target='全部' />
                    <Filter 
                        data={ type } 
                        getType={ this.getType }
                        getArea={ this.getArea }
                    />
                    <List data={ visibi }/>
                    <Paging 
                        length={ Math.ceil(data.length/number) }
                        PagingCallback={ this.PagingCallback }
                    />
                </div>
            </Layout>
        )
    }
}
