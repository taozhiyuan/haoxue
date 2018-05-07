import React, { Component } from 'react';
import City from './City.js';

export default class Province extends Component {
    constructor(props){
        super(props);
        this.state = {
            provinceActive : null
        }
    };
    provinceEvent = (event,parame) => {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            provinceActive : parame
        })
    }
    render() {
        const province = this.props.data.province;
        const Active_P = this.state.provinceActive;
        return (
            <ul className="IIInsomnia-province-wrap">
                {province.map((item,index)=>(
                    <li className={ Active_P === index?"active":null }
                        key={ index }
                        data-id={ item.id }
                        onClick={ (e)=>{this.provinceEvent(e,index)} }
                        data-name={ item.name }>
                        { Active_P===index && <City active={ index } data={ province[index].city } /> }
                        <div className={ Active_P === index?"active":null }>
                            { item.name }
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

