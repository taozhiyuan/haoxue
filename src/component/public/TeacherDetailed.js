// 机构详情
import React, { Component } from 'react';
import Path from '../agency/Path.js';
import Axios from '../../request/axiosHome.js';
import './TeacherDetailed.css';
// import LoadMore from '../component/mechanism/LoadMore.js';

export default class TeacherDetailed extends Component {
    constructor(){
        super()
        this.state = {
            data : null
        }
    }
    componentWillMount(){
        Axios.detailed().then((res)=>{
            // console.log(res)
            this.setState({
                data : res.data
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        const data = this.state.data;
        if(!data) return false;
        return (
            <div className="teacher-detailed">
                <div className="main-public">
                    <Path />
                    <ul className="teacher-text">
                        <li></li>
                        <li>
                            <h1>王璐老师简介</h1>
                            <h4>年级：高一、高二、高三</h4>
                            <h4>学科：生物</h4>
                            <h5>中国农业大学生物相关专业硕士毕业，具有高级生物教师资格证，熟知北京市的生物中高考考点。教学三年以来，坚持总结生物知识的规律和记忆技巧，努力让孩子轻松学好生物。坚持督促孩子做笔记，努力培养孩子好的学习习惯。坚持"爱上学习，收获成长“的座右铭，努力让孩子不仅收获知识，而且收获成长。</h5>
                        </li>
                    </ul>
                    <div className="teacher-info">
                        <table>
                            <tbody>
                                <tr>
                                    <th>班级名称</th>
                                    <th>上课教师及地点</th>
                                    <th>开课日期及时间</th>
                                    <th>费用</th>
                                </tr>
                                <tr>
                                    <td>初三生物高校学习班</td>
                                    <td><i></i>王璐</td>
                                    <td>2018-3-30—2018-6-30</td>
                                    <td>￥8999元</td>
                                </tr>
                                <tr>
                                    <td>班级：A班</td>
                                    <td><i></i>岳麓大道##号</td>
                                    <td>岳麓大道##号</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <button>立即预约</button>
                    </div>
                </div>
            </div>
        );
    }
}