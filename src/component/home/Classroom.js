import React, { Component } from 'react';
import './Classroom.css';
import HomeAdvantageTitle from './HomeAdvantageTitle.js';
import Paging from './Paging.js';
import Axios from '../../request/axiosHome.js';

export default class Classroom extends Component {
    constructor(props){
        super(props)
        this.state = {
            classroomActive : 0,
            classroomType : ["子女课堂","家长课堂"],
            data : []
        }
    }
    componentWillMount(){
        Axios.classRoom().then((res)=>{
            this.setState({
                data : res.data.result
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    componentDidMount(){
        
    }
    changeActive = ( para )=>{
        this.setState({
            classroomActive : para
        })
    }
    render() {
        let classroomList = this.state.data.map(( item,index )=>(
            <li key={ index }>
                <div>
                    <span className="ion-ios-star-outline">{ item.collection }</span>
                </div>
                <aside>
                    <h5>{ item.name }</h5>
                    <h6>{ item.price }</h6>
                    <h4>{ item.team }</h4>
                </aside>
            </li>
        ));
        let classroomType = this.state.classroomType.map(( item,index )=>(
            <button className={ index===this.state.classroomActive?"active":"" } 
                key={ index }
                onClick={ ()=>{ this.changeActive(index) } }
            >
                { item }
            </button>
        ));
        return (
            <section className="home-classroom">
                <div className="main-public">
                    <HomeAdvantageTitle 
                        h1="亲子课堂"
                        h4="让教育更科学，让学习更快乐"
                    />
                    { classroomType }
                    <ul className="home-classroom-list">
                        { classroomList }
                    </ul>
                    <Paging />
                </div>
            </section>
        );
    }
}
