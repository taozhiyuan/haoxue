import React, { Component } from 'react'
import Link from 'next/link'

export default class Path extends Component {
    render(){
        const { prev, target } = this.props;
        return(
            <h4>
                { prev.map((item, index)=>(
                    <React.Fragment key={ index }>
                        <Link href="/"><a>{ item }</a></Link>
                        <i className="icon ion-ios-arrow-forward"></i>
                    </React.Fragment>
                )) }
                <span>{ target }</span>
                <style jsx>{`
                    h4 {
                        line-height : 60px;
                        color : #ccc;
                    }
                        h4 > a:last-child {
                            color : #f5a00a;
                        }
                        i {
                            display: inline-block;
                            padding : 0px 20px;
                            color : #ccc;
                        }
                `}</style>
            </h4>
        )
    }
}
