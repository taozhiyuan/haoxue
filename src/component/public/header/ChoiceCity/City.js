import React, { Component } from 'react';

export default class City extends Component {
    render() {
        const city = this.props.data;
        let active = this.props.active+1;
        if(active > 6) active = active%6;
        console.log("active"+active)
        let sty = 0;
        switch (true) {
            case active%6===0:
                sty = -262;
                console.log(6)
                break;
            case active%5===0:
                sty = -205;
                console.log(5)
                break;
            case active%4===0:
                sty = -147;
                console.log(4)
                break;
            case active%3===0:
                sty = -89;
                console.log(3)
                break;
            case active%2===0:
                sty = -31;
                console.log(2)
                break;
            default:
                break;
        }
        return (
            <ul className="IIInsomnia-city-wrap" style={ {left: sty} }>
                {city.map((item,index)=>(
                    <li key={ index }
                        data-id={ item.id }
                        data-name={ item.name }>
                            { item.name }
                    </li>
                ))}
            </ul>
        )
    }
}

