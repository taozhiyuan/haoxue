import React, { Component } from 'react'

export default class DetailsText extends Component {
    render(){
        const { data } = this.props;
        return(
            <div>
                <h2>{ data.orgName }</h2>
                <dl>
                    <dt>所授课程：</dt>
                        <dd>{ data.teachCourse }</dd>
                    <dt>机构类型：</dt>
                        <dd>{ data.memberType }</dd>
                    <dt>营业时间：</dt>
                        <dd>{ data.business }</dd>
                    <dt>师资力量：</dt>
                        <dd>{ data.orgResources }</dd>
                    <dt>经营周期：</dt>
                        <dd>{ data.cycle }</dd>
                    <dt>学员规模：</dt>
                        <dd>{ data.students }</dd>
                    <dt>上课地址：</dt>
                        <dd>{ data.orgAddressDetail }&emsp;
                            <em onClick={ this.props.mapClick }><i className="icon ion-md-pin"/>&nbsp;查看地图</em>
                        </dd>
                </dl>
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
                            font-size : 14px;
                        }
                            dl > dt:not(:last-of-type) {
                                border-bottom : 1px solid #ddd;
                            }
                            dl > dd:not(:last-of-type) {
                                border-bottom : 1px solid #ddd;
                            }
                            dt {
                                width : 15%;
                                color : #999;
                                line-height : 40px;
                                display: inline-block;
                            }
                            dd {
                                color : #666;
                                width : 85%;
                                line-height : 40px;
                                height: 41px;
                                display: inline-block;
                                vertical-align: top;
                            }
                                dd > em {
                                    cursor : pointer;
                                }
                                dd > em:hover {
                                    color : #f5a00a;
                                }
                `}</style>
            </div>
        )
    }
}
