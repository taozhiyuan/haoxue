import React, { Component } from 'react'
import Path from '../public/Path.jsx';
import DetailsImgScroll from '../public/DetailsImgScroll.jsx';
import DetailsText from './DetailsText.jsx';
import DetailsMap from '../public/DetailsMap.jsx'

export default class DetailsMain extends Component {
    state = {
        map : false
    }
    mapClick = () => {
        this.setState({ map : !this.state.map })
    }
    render(){
        const { map } = this.state;
        const { data } = this.props;
        return(
            <section>
                <div className="main-public">
                    <Path prev={['课程']} target={ data.courseName } />
                    <DetailsImgScroll data={ data.coursePhotoList } />
                    <DetailsText mapClick={ this.mapClick } data={ data } />
                </div>
                { map && <DetailsMap 
                            mapClick={ this.mapClick } 
                            data={{ lng: data.courseLng, lat: data.courseLat }} 
                        /> 
                }
                <style jsx>{`
                    section {
                        background-color : #FFF;
                        overflow : hidden;
                        padding-bottom : 30px;
                    }
                `}</style>
            </section>
        )
    }
}
