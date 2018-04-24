
// 关于我们 功能特色
import React, { Component } from 'react';
import Title from './Title.jsx';
import "./Characterist.css";
import Axios from '../../request/axiosHome.js';

export default class Characterist extends Component {
    constructor(){
        super()
        this.state = {
            data : []
        }
    }
    componentWillMount(){
        Axios.characterist({ articleType : '5' }).then((res)=>{
            // console.log(res.data.result)
            this.setState({
                data : res.data.result
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        const { data } = this.state;
        return (
            <section className="about-characterist">
                <div className="main-public">
                    <Title>功能特色</Title>
                    <ul className="about-characterist-list">
                        { data.map((item, index)=>(
                            <li key={ index }>
                                <h4>{ item.articleTitle }</h4>
                                <h6>{ item.articleContent }</h6>
                            </li>
                        )) }
                    </ul>
                </div>
            </section>
        );
    }
}