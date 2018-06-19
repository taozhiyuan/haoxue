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
        if( !data ) return false;
        return(
            <section>
                <div className="main-public">
                    <Path prev={['机构']} target={ data.orgName } />
                    <DetailsImgScroll data={ data.orgPhotoList } />
                    <DetailsText mapClick={ this.mapClick } data={ data } />
                </div>
                { map && <DetailsMap mapClick={ this.mapClick } /> }
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
