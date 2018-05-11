
// 类似机构
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './RelevantList.css';

export default class Relevant extends Component {
    render() {
        const { data } = this.props;
        return (
            <ul className="relevant-list">
                <li>类似机构</li>
                { data.map((item, index)=>(
                    <li key={ index }>
                        <Link to={{
                            pathname: "/agencyList/agency",
                            search: `id=${ item.id }`,
                        }}>
                            { item.orgName }
                        </Link>
                    </li>
                )) }
            </ul>
        );
    }
}