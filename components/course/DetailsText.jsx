import React, { Component } from 'react'

export default class DetailsText extends Component {
    render(){
        const { data } = this.props;
        return(
            <div>
                <h2>{ data.courseName }</h2>
                <h4>{ data.orgName }</h4>
                <dl>
                    <dt>课程周期：</dt>
                    <dd>{ data.courseCycle }</dd>
                    <dt>上课时间：</dt>
                    <dd>{ data.courseClassTime }</dd>
                    <dt>上课地址：</dt>
                    <dd>{ data.courseAddress }&emsp;
                        <em onClick={ this.props.mapClick }><i className="icon ion-md-pin"/>&nbsp;查看地图</em>
                    </dd>
                </dl>
                <h5>课程价格：<em>￥{ data.coursePrice }</em></h5>
                <button>预约体验</button>
                <button>分期服务</button>
                <style jsx>{`
                    div {
                        width : 650px;
                        height : 325px;
                        float : left;
                    }
                        h2 {
                            line-height : 45px;
                        }
                        h4 {
                            color : #999;
                            padding-bottom : 15px;
                        }
                        dl {
                            background-color : #f2f2f2;
                            padding : 10px 20px;
                            font-size : 14px;
                        }
                            dt {
                                width : 15%;
                                color : #999;
                                line-height : 30px;
                                display: inline-block;
                            }
                            dd {
                                color : #666;
                                width : 85%;
                                display: inline-block;
                            }
                                dd > em {
                                    cursor : pointer;
                                }
                                dd > em:hover {
                                    color : #f5a00a;
                                }
                        h5 {
                            color : #999;
                            line-height : 75px;
                        }
                            h5 > em {
                                color : #f01313;
                                font-size : 24px;
                            }
                        button {
                            width : 200px;
                            height : 50px;
                            border : 1px solid #f5a00a;
                            border-radius : 5px;
                            color : #f5a00a;
                            font-size : 18px;
                        }
                        div > button:first-of-type {
                            margin-right : 20px;
                            background-color : #f5a00a;
                            color : #FFF;
                        }
                `}</style>
            </div>
        )
    }
}
