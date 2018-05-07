import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

class NavMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuPara : [
                { text : "首   页", path : "/", to : "/" },
                // { text : "教培机构", path : "/agencyList/:bar*", to : "/agencyList" },
                { text : "父母课程", path : "/parentClassList/:bar*", to : "/parentClassList" },
                { text : "孩子课程", path : "/childClassList/:bar*", to : "/childClassList" },
                { text : "好学分期", path : "/byStages/:bar*", to : "/byStages" },
                { text : "关于我们", path : "/aboutUs/:bar*", to : "/aboutUs" }
            ]
        }
    };
    render() {
        return (
            <ul className="index-public-menu">
                { this.state.menuPara.map(( item, index ) => (
                    <Route exact path={ item.path } key={ index }
                        children={({ match }) => (
                            <li className={ match ? "active" : "" }>
                                <Link to={ item.to }>{ item.text }</Link>
                            </li>
                        )}
                    />
                ))}
            </ul>
        );
    }
}


export default NavMenu;
