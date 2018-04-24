
// 机构介绍容器
import React, { Component } from 'react';
import './TextContainer.css';

export default class TextContainer extends Component {
    // setIframeHeight(e){
    //     // console.log(e.target)
    //     const iframe = e.target;
    //     if (iframe) {
    //         var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
    //         if (iframeWin.document.body) {
    //             iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
    //         }
    //     }
    // };
    render() {
        const data = this.props.data;
        const imgPrefix = "http://hxj-oss-bucket.oss-cn-shenzhen.aliyuncs.com/";
        if(!data){ return false }
        return (
            <div className="text-container">
                <header>
                    <h1>{ data.orgName }</h1>
                    <h3><i className="iconfont icon-kejian"></i>{ data.browsing }</h3>
                    <h4><i className="iconfont icon-guanzhu"></i>{ data.like }</h4>
                    <h4><i className="iconfont icon-dianzan"></i>{ data.collections }</h4>
                </header>
                <aside><img src={ imgPrefix + data.photoOsskey } alt=""/></aside>
                <table className="text-item">
                    <tbody>
                        <tr>
                            <th>高思师资：</th>
                            <td>{ data.reachers }</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>所授课程：</th>
                            <td>{ data.teachCourse }</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>联系地址：</th>
                            <td>{ data.orgAddressDetail }</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>咨询电话：</th>
                            <td>{ data.orgPhone }</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>机构介绍：</th>
                            <td colSpan="2">
                                <iframe 
                                    // onLoad={ this.setIframeHeight }
                                    id="agency-detailed-frame"
                                    frameBorder="0"
                                    scrolling="yes"
                                    seamless
                                    src ="http://hxj-oss-bucket.oss-cn-shenzhen.aliyuncs.com/html/admin/20180424/152455090823382372.html">
                                </iframe>
                                {/* { data.richTextKey } */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}