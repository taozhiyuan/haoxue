import React, { Component } from 'react'
import Child from '../public/info/Child.jsx';
import AsideInfo from '../public/info/AsideInfo';

export default class Information extends Component {
    render(){
        const { data } = this.props;
        return(
            <div className="main-public">
                <section>
                    <Child data={ data.child } name="亲子视界" url="/infoList" />
                    <AsideInfo data={ data.recommendList } title="行业新闻" />
                    <style jsx>{`
                        section {
                            font-size : 0px;
                            margin-top : 20px;
                        }
                    `}</style>
                </section>
            </div>
        )
    }
}
