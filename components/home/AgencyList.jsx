import React, { Component } from 'react'
import Title from '../public/Title.jsx';
import AgencyItem from '../agency/AgencyItem';

export default class Course extends Component {
    render(){
        const { data } = this.props;
        return(
            <div className="main-public">
                <section>
                    <Title name="信誉机构" url="/agencyList" />
                    <ul>
                        { data.map((item, index)=>(
                            <AgencyItem data={ item } key={ index } />
                        )) }
                    </ul>
                    <style jsx>{`
                        section {
                            padding : 10px;
                            background : #FFF;
                            border-radius : 5px;
                        }
                            ul {
                                padding : 10px 0px 30px;
                            }
                            ul::after {
                                content: "";
                                height: 0;
                                line-height: 0;
                                display: block;
                                clear: both;
                                visibility: hidden;
                            }
                                ul > li:not(:nth-last-child(-n+5)){
                                    margin-bottom : 10px;
                                }
                    `}</style>
                </section>
            </div>
        )
    }
}
