import React, { Component } from 'react';

export default class Prompt extends Component {
    render(){
        const { keyword } = this.props;
        return (
            <h5>
                <i className="icon ion-md-search" />&nbsp;
                { keyword ? <>以下是搜索<span>{ keyword }</span>的结果...</> : '很遗憾，未找到您搜索的内容，可以尝试其他关键词试试～' }
                <style jsx>{`
                    h5 {
                        background-color : #FFF;
                        border-radius : 5px;
                        line-height : 60px;
                        color : #666;
                        padding : 0px 20px;
                        margin-top : 20px;
                        margin-bottom : 20px;
                    }
                        i {
                            display : inline-block;
                            font-size : 18px;
                            vertical-align : top;
                        }
                        span {
                            color : #f5a00a;
                            display: inline-block;
                            padding : 0px 10px;
                        }
                `}</style>
            </h5>
        )
    }
}