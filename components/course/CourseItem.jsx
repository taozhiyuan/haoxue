import React, { Component } from 'react'
import Link from 'next/link'
import { imgPath } from '../../global/axios'

export default class CourseItem extends Component {
    render(){
        const { data } = this.props;
        return(
            <li>
                <Link 
                    href={{ 
                        pathname: '/courseDetails', 
                        query: { id: data.id }
                    }}
                >
                    <a>
                        <aside className="default"><img src={ imgPath + data.photoOsskey } alt=""/></aside>
                        <h4 className="ellipsis">{ data.courseName }</h4>
                        <h5 className="ellipsis">{ data.orgName }</h5>
                    </a>
                </Link>
                <style jsx>{`
                    li {
                        margin-bottom : 10px;
                        padding : 10px;
                        width : 236px;
                        height : 220px;
                        float : left;
                        background-color : #FFF;
                        transition : all 0.5s;
                    }
                    li:hover {
                        position: relative;
                        z-index : 9;
                        box-shadow: 0px 0px 10px #c2c2c2;
                    }
                        aside {
                            height : 135px;
                        }
                        h4 {
                            padding-top : 18px;
                        }
                        h5 {
                            padding-top : 10px;
                            color : #999;
                        }
                            img {
                                transition : all 0.5s;
                            }
                            img:hover {
                                transform : scale(1.3);
                            }
                    `}</style>
            </li>
        )
    }
}
