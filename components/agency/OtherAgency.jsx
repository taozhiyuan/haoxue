import React, { Component } from 'react'
import Title from '../public/Title.jsx';
import AgencyItem from './AgencyItem.jsx';

export default class OtherAgency extends Component {
    render(){
        const { data } = this.props;
        return(
            <div className="main-public">
                <section>
                    <Title name="相关机构" url="/otherAgency" />
                    { data ? <ul>{ data.map((item ,index)=>( 
                        <AgencyItem data={ item } key={ index } /> 
                    )) }</ul> : <h5>目前没有相关数据</h5> }
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
