
// 关于我们 》招贤纳士
import React, { Component } from 'react';
import Title from '../public/Title.jsx';
import "./Recruit.css";
import Axios from '../../global/axios.js';

export default class Recruit extends Component {
    state = {
        data : [],
        classArr : [0,1,2,3,4,5],
        imgPrefix : sessionStorage.getItem("imgPrefix")
    }
    componentWillMount(){
        Axios.characterist({ articleType : '6' }).then((res)=>{
            console.log(res.data.result)
            this.setState({
                data : res.data.result
            })
        })
    }
    round = (parame) => {
        // event.preventDefault();
        const arr = [
            [0,1,2,3,4,5],
            [5,0,1,2,3,4],
            [4,5,0,1,2,3],
            [3,4,5,0,1,2],
            [2,3,4,5,0,1],
            [1,2,3,4,5,0]
        ]
        this.setState({
            classArr : arr[parame]
        })
    }
    render() {
        const { classArr, data, imgPrefix } = this.state;
        return (
            <section className="about-recruit">
                <div className="main-public">
                    <Title>招贤纳士</Title>
                    <ul className="staff-style-list transition-all-5">
                        { data.map((item, index)=>(
                            <li className={ `active_${classArr[index]}` }
                            key={ index }
                                onClick={ ()=>{ this.round(index) } }
                            >
                                <div>
                                    <img src={ imgPrefix + item.articleFile } alt=""/>
                                    <div className="about-recruit-item">
                                        {/* <iframe 
                                            // onLoad={ this.setIframeHeight }
                                            title="Recruit-iframe"
                                            id="recruit-frame"
                                            frameBorder="0"
                                            scrolling="yes"
                                            seamless
                                            src ={ imgPrefix + item.richTextKey }>
                                        </iframe> */}
                                        
                                        {/* <h3>PHP工程师</h3>
                                        <h5>岗位描述</h5>
                                        <h6>▲ 负责EduSoho核心代码的开发 (https://github.com/EduSoho/EduSoho)</h6>
                                        <h6>▲ 负责好知网核心代码的开发（http://www.howzhi.com/</h6>
                                        <h5>岗位要求</h5>
                                        <h6>▲ 具备较强的逻辑思维能力</h6>
                                        <h6>▲ 有一颗成为技术大牛的心，有较强的学习能力及学习主动性</h6>
                                        <h6>▲ 熟悉PHP / MySQL / jQuery的开发，使用过任一款PHP的框架</h6>
                                        <h6>▲ 能阅读英文的技术文档</h6> */}
                                    </div>
                                </div>
                            </li>
                        )) }
                    </ul>
                </div>
            </section>
        );
    }
}