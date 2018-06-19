import React, { Component } from 'react'
import Title from '../public/Title.jsx';
import CourseItem from './CourseItem.jsx';

export default class OtherCourse extends Component {
    state = {
        data : [{
            id : "id",
            photoOsskey : "photoOsskey",
            courseName : "courseName",
            orgName : "orgName"
        }]
    }
    render(){
        const { data } = this.props;
        return(
            <div className="main-public">
                <section>
                    <Title name="相关课程" url="/otherCourse" />
                    { data ? <ul>{ 
                        data.map((item ,index)=>( 
                            <CourseItem key={ index } data={ item } /> 
                        )) 
                        }</ul> : <h5>目前没有相关数据</h5> 
                    }
                    <style jsx>{`
                        section {
                            padding : 10px;
                            border-radius : 5px;
                            background-color : #FFF;
                            margin-top : 20px;
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
            </div>
        )
    }
}
