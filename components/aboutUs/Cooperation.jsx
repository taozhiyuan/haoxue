import React, { Component } from 'react'
import Title from './Title.jsx'
import Expert from './Expert.jsx'
import Finance from './Finance.jsx'
import Industry from './Industry.jsx'

export default class Cooperation extends Component {
    render(){
        return(
            <section>
                <div className="main-public">
                    <Title 
                        ch={['战略', '合作']} 
                        en="STRATEGIC COOPERATION" 
                        note="只有完美的团队才能成就我平凡的个人！团结产生力量，凝聚产生希望！"
                    />
                    <Expert />
                    <Finance />
                    <Industry />
                </div>
                <style jsx>{`
                    section {
                        background-color : #FFF;
                    }
                        div {
                            width : 1000px;
                        }
                `}</style>
            </section>
        )
    }
}
