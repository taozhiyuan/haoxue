import React, { Component } from 'react'
import Link from 'next/link'
import { imgPath } from '../../global/axios'

export default class AgencyItem extends Component {
    render(){
        const { data } = this.props;
        return(
            <li>
                <Link 
                    href={{ 
                        pathname: '/agencyDetails', 
                        query: { id: data.id }
                    }}
                >
                    <a>
                        <aside className="default"><img src={ imgPath + data.logoKey } alt="" /></aside>
                        <h4 className="ellipsis">{ data.orgName }</h4>
                    </a>
                </Link>
                <style jsx>{`
                    li {
                        padding : 10px;
                        margin-bottom : 10px;
                        width : 236px;
                        height : 200px;
                        float : left;
                        background-color : #FFF;
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
                            img:hover {
                                transform : scale(1.3);
                                transition : all 0.5s;
                            }
                    `}</style>
            </li>
        )
    }
}
