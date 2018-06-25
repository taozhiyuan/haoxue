import React, { Component } from 'react'

export default class DetailsMap extends Component {
    state = {
        Map : null,
        Marker : null
    }
    componentDidMount(){
        import('react-bmap').then(({ Map, Marker })=>{
            this.setState({ Map, Marker })
            console.log("百度地图"+window.BMap)
        }).catch((err)=>{
            console.log("百度地图"+err)
        })
    }
    render(){
        const { Map, Marker } = this.state;
        const { orgLat, orgLng, mapClick } = this.props;
        // const position = { lng: 116.402544, lat: 39.928216 };//测试坐标
        const position = { lng: orgLng, lat: orgLat };//测试坐标
        return(
            <section onClick={ mapClick }>
                <div onClick={ (e)=>{ e.stopPropagation() } }>
                    { Map && orgLat && orgLng ? <Map center={ position } zoom={ 15 } style={{ height: '100%' }}>
                                <Marker position={ position } />
                            </Map> :
                            <h5>机构坐标暂无数据 或 地图程序加载失败</h5>
                    }
                </div>
                <style jsx>{`
                    section {
                        position : fixed;
                        top : 0;
                        left : 0;
                        width : 100%;
                        height : 100%;
                        z-index : 9;
                        background-color : rgba(0, 0, 0, 0.5);
                    }
                        div {
                            height : 400px;
                            width : 50%;
                            position : relative;
                            top : 50%;
                            left : 0;
                            margin : -200px auto 0px;
                            background-color : #FFF;
                            border-radius : 5px;
                            overflow : hidden;
                        }
                        h5 {
                            line-height : 400px;
                            color : #ccc;
                            text-align : center;
                        }
                `}</style>
            </section>
        )
    }
}
