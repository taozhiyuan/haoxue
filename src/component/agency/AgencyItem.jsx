
// 教培机构列表
import React, { Component } from 'react';
import './AgencyItem.css';

import { Link } from "react-router-dom";

export default class List extends Component {
    imgPrefix = sessionStorage.getItem("imgPrefix");
    render(){
        const { url, data } = this.props;
        if(!data){ return false }
        return (
            <li className="Agency-Item">
                <Link to={{
                    pathname : `${ url }/agency`,
                    search: `id=${ data.id }`,
                }}>
                    <div>
                        <span>人气：{ data.browsing }</span>
                        <img src={ this.imgPrefix + data.photoOsskey } alt=""/>
                    </div>
                    <aside>
                        <h4>{ data.orgName }</h4>
                        <h5>地址:{ data.orgAddressDetail }</h5>
                        <h5>咨询电话：{ data.orgPhone }</h5>
                        <span><i className="iconfont icon-dianzan"></i>{ data.like }</span>
                    </aside>
                </Link>
            </li>
        );
    }
}