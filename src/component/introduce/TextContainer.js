
// 机构介绍容器
import React, { Component } from 'react';
import './TextContainer.css';

export default class TextContainer extends Component {
    render() {
        // console.log(this.props.data)
        const data = this.props.data;
        return (
            <div className="text-container">
                <header>
                    <h1>{ data.name }</h1>
                    <h3><i className="iconfont icon-kejian"></i>{ data.seeing }</h3>
                    <h4><i className="iconfont icon-guanzhu"></i>{ data.like }</h4>
                    <h4><i className="iconfont icon-dianzan"></i>{ data.collection }</h4>
                </header>
                <aside></aside>
                <table className="text-item">
                    <tbody>
                        <tr>
                            <th>高思师资：</th>
                            <td>{ data.reachers }</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>所授课程：</th>
                            <td>{ data.curriculum }</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>联系地址：</th>
                            <td>{ data.address }</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>咨询电话：</th>
                            <td>{ data.tel }</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>机构介绍：</th>
                            <td colSpan="2">{ data.text }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}