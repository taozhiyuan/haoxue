import React, { Component } from 'react';
import "./Teachers.css"
import Title from "./Title.js";

export default class Teachers extends Component {
    render(){
        return (
            <div className="teachers-info">
                <Title>简介</Title>
                <ul className="teachers-cont">
                    <li>
                        <h6>高思教育立志做高品质教育,专注于中小学的课外辅导培训,提供中小学最新资讯及学习方法,家教式一对一服务,高思教育让孩子爱上学习,收获成长!</h6>
                        <h6>从2009年底创立至今，高思从1间50平米办公室扩充为拥有11层5500多平米的现代化写字楼“高思教育大厦”，教学区由1所发展至近20所，员工由18人增长至1400多人，学员由843人增长至60000余人。
所有校区都配置有现代化的教学设备，保证学生上课的质量和环境，干净整洁的教室，明亮通透的窗户，整齐崭新的桌椅，每一个细节都让家长放心， 让孩子舒心。</h6>
                    </li>
                    <li></li>
                </ul>
            </div>
        );
    }
}