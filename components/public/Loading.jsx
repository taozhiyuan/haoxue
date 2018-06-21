import React, { Component } from 'react'

export default class Loading extends Component {
    render(){
        return(
            <h5>
                loading...
                <style jsx>{`
                    h5 {
                        line-height : 200px;
                        color : #666;
                        text-align : center;
                    }
                `}</style>
            </h5>
        )
    }
}
