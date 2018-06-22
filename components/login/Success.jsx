import React, { Component } from 'react'

export default class Success extends Component {
    render(){
        const { data } = this.props;
        return(
            <div>
                <i className="icon ion-md-checkmark-circle-outline"></i>
                <h4>{ data }</h4>
                <button>进入首页</button>
                <style jsx>{`
                    i {
                        font-size : 60px;
                        color : #66c21b;
                        display: inline-block;
                        line-height: 50px;
                        margin-top: 70px;
                    }
                    h4 {
                        padding-top : 15px;
                        padding-bottom : 100px;
                        color : #666;
                    }
                    button {
                        width : 240px;
                        height : 38px;
                        color : #FFF;
                        font-size : 14px;
                        background-color : #f5a00a;
                        border-radius : 19px;
                    }
                `}</style>
            </div>
        )
    }
}
