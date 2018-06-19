import React, { Component } from 'react'

export default class TitleWhite extends Component {
    render(){
        const { ch, en, note } = this.props;
        return(
            <div>
                <h2>{ ch[0] }<span>{ ch[1] }</span></h2>
                <h5>{ en }</h5>
                { note && <h4>{ note }</h4> }
                <style jsx>{`
                    div {
                        text-align : center;
                    }
                        h2 {
                            color : #FFF;
                            font-weight : bold;
                            padding-top : 90px;
                        }
                            span {
                                color : #FFF;
                            }
                            h5 {
                                color : #FFF;
                                padding : 10px 0px;
                            }
                            h4 {
                                color : #FFF;
                                padding : 25px 0px 50px;
                            }
                `}</style>
            </div>
        )
    }
}
