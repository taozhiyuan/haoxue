
// 孩子课程列表
import React, { Component } from 'react';
import NavAreaType from '../../component/public/ClassSorting/NavAreaType.jsx';
import NavContentType from '../../component/public/ClassSorting/NavContentType.jsx';
import NavSort from '../../component/public/ClassSorting/NavSort.jsx';
import List from '../../component/course/List.jsx';
import CourseDetails from './CourseDetails.jsx';
import Path from '../../component/public/Path.jsx';

import { Route, Switch } from "react-router-dom";
import { select } from '../../global/navSort.js';

export default class ChildClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : props.data.couseList,
            type : { index : 0, id : 0 },
            area : { index : 0, id : 0 },
            classType : props.data.class
        }
    };
    getType = ( id ) => {
        const { area } = this.state;
        this.setState({ 
            type : { id : id },
            data : select( area.id, id, 'courseClassify','areaid', this.props.data.couseList )
        });
    }
    getArea = ( id ) => {
        const { type } = this.state;
        this.setState({ 
            area : { id : id },
            data : select( type.id, id, 'areaid','courseClassify', this.props.data.couseList )
        });
    }
    getSort = ( data ) => {
        this.setState({
            data : data
        })
    }
    render() {
        const { path } = this.props.match;
        const { data, classType } = this.state;
        return (
            <Switch>
                <Route path={ `${ path }/course` } component={ CourseDetails } />
                <Route path={ path } render={({ match })=>(
                    <div className="child-class">
                        <div className="main-public">
                            <Path />
                            <nav className="nav-class-sorting">
                                <NavAreaType 
                                    getArea={ this.getArea } 
                                />
                                <NavContentType 
                                    getType={ this.getType } 
                                    classType={ classType }
                                />
                                <NavSort 
                                    getSort={ this.getSort } 
                                    data={ data }
                                />
                            </nav>
                            <List url={ match.url } data={ data }/>
                        </div>
                    </div>
                )} />
            </Switch>
        );
    }
}