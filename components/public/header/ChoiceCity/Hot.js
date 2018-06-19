import React, { Component } from 'react';

export default class Hot extends Component {
    render() {
        const hot_city = this.props.data.hot;
        return (
            <ul id="IIInsomnia_hot_city">
                {hot_city.map((item,index)=>(
                    <li className="IIInsomnia-hot-city" key={ index }
                        data-id={ item.id }
                        data-name={ item.name }
                        data-pid={ item.pid }
                        data-pname={ item.pname }>
                            { item.name }
                    </li>
                ))}
            </ul>
        )
    }
}

