import React, { Component } from 'react'

export default class SubBanner extends Component {
    render(){
        return(
            <div className="main-public">
                <section>
                    <img src="/static/img/home/sub_banner.png" alt=""/>
                    <style jsx>{`
                        section {
                            height : 160px;
                            margin : 20px 0px;
                            background : #FFF;
                        }
                    `}</style>
                </section>
            </div>
        )
    }
}
