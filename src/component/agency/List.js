
// 教培机构列表
import React, { Component } from 'react';
import './List.css';

import { Link } from "react-router-dom";

export default class List extends Component {
    render(){
        const { path, data } = this.props;
        const imgPrefix = "http://hxj-oss-bucket.oss-cn-shenzhen.aliyuncs.com/";
        if(!data){ return false }
        console.log(data)
        return (
            <ul className="mechanism-list">
            { data.map((item,index)=>(
                <li key={ index }>
                    <Link to={{
                        pathname : `${path}/agency`,
                        state: { 
                            id : item.id
                        }
                    }}>
                        <div>
                            <span>人气：{ item.browsing }</span>
                            <img src={ imgPrefix+item.photoOsskey } alt=""/>
                        </div>
                        <aside>
                            <h4>{ item.orgName }</h4>
                            <h5>地址:{ item.orgAddressDetail }</h5>
                            <h5>咨询电话：{ item.orgPhone }</h5>
                            <span><i className="iconfont icon-dianzan"></i>{ item.like }</span>
                        </aside>
                    </Link>
                </li>
            ))}
            </ul>
        );
    }
}