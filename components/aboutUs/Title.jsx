import React, { Component } from 'react'

export default class Title extends Component {
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
                            color : #5f5f5f;
                            font-weight : bold;
                            padding-top : 90px;
                        }
                            span {
                                color : #f5a00a;
                            }
                            h5 {
                                color : #ccc;
                                padding : 10px 0px;
                            }
                            h4 {
                                color : #666;
                                padding : 25px 0px 50px;
                            }
                `}</style>
            </div>
        )
    }
}
