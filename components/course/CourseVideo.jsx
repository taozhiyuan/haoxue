import React, { Component } from 'react'
import Title from '../public/Title.jsx';
import VideoItem from '../public/VideoItem.jsx';

export default class CourseVideo extends Component {
    state = {
        data : [{
            coverKey : "/static/img/home/Course.png",
            videoName : "零基础瑜伽培训班1",
            videoKey : 'https://hxj-oss-bucket.oss-cn-shenzhen.aliyuncs.com/sp/f6562d7712c20c42bd528f5475d6070b.mp4'
        },{
            coverKey : "/static/img/home/Course.png",
            videoName : "零基础瑜伽培训班2",
            videoKey : 'https://hxj-oss-bucket.oss-cn-shenzhen.aliyuncs.com/sp/f6562d7712c20c42bd528f5475d6070b.mp4'
        }]
    }
    render(){
        const { data } = this.props;
        return(
            <section>
                <Title name={ this.props.name } />
                { data && data.length !== 0 ? <ul>{ data.map((item ,index)=>( 
                        <VideoItem data={ item } key={ index } /> 
                )) }</ul> : <h5>目前没有相关数据</h5> }
                <style jsx>{`
                    section {
                        float : left;
                        width : 256px;
                        padding : 10px;
                        border-radius : 5px;
                        background-color : #FFF;
                    }
                        h5 {
                            color : #999;
                            line-height : 50px;
                            padding : 0px 10px;
                        }
                        ul {
                            padding : 10px 0px;
                        }
                        ul::after {
                            content: "";
                            height: 0;
                            line-height: 0;
                            display: block;
                            clear: both;
                            visibility: hidden;
                        }
                `}</style>
            </section>
        )
    }
}
