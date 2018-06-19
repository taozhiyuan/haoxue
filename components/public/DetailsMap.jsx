import React, { Component } from 'react'

export default class DetailsMap extends Component {
    state = {
        Map : null,
        Marker : null
    }
    componentDidMount(){
        import('react-bmap').then(({ Map, Marker })=>{
            this.setState({ Map, Marker })
        })
    }
    render(){
        const { Map, Marker } = this.state;
        const position = {lng: 116.402544, lat: 39.928216};
        const { data } = this.props;
        return(
            <section onClick={ this.props.mapClick }>
                <div onClick={ (e)=>{ e.stopPropagation() } }>
                    { Map && <Map center={ position } zoom={ 15 } style={{ height: '100%' }}>
                        <Marker position={ position } />
                    </Map> }
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
                            width : 100%;
                            position : absolute;
                            top : 50%;
                            left : 0;
                            margin-top : -200px;
                            background-color : #FFF;
                        }
                `}</style>
            </section>
        )
    }
}
