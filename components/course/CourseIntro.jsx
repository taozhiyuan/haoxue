import React, { Component } from 'react'
import Title from '../public/Title.jsx';
import axios from '../../global/axios'

export default class CourseIntro extends Component {
    state = {
        content : null
    }
    componentDidMount(){
        axios.getStringByKey({ key : this.props.data }).then((res)=>{
            this.setState({ content : res.data.result })
        })
    }
    render(){
        const { name, data } = this.props;
        const { content } = this.state;
        return(
            <section>
                <Title name={ name } />
                { content ? 
                    <div dangerouslySetInnerHTML={{ __html: content }} /> : 
                    <h5>目前没有相关数据</h5> 
                }
                <style jsx>{`
                    section {
                        width : 924px;
                        height : 100%;
                        padding : 10px;
                        border-radius : 5px;
                        background-color : #FFF;
                        float : left;
                        margin-right : 20px;
                    }
                        div {
                            padding : 20px 10px;
                        }
                        h5 {
                            color : #999;
                            line-height : 50px;
                            padding : 0px 10px;
                        }
                `}</style>
            </section>
        )
    }
}
