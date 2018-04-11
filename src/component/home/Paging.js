import React, { Component } from 'react';
import './Paging.css';

export default class Paging extends Component {
    constructor(){
        super()
        this.state = {
            star : 1,
            index : 0,
            number : 9
        }
    }
    changeActive = (parame) => {
        this.setState({
            index : parame
        })
        if(this.state.number > 6 && parame === 5 ){
            this.setState({
                star : this.state.number - 5
            })
        }
    }
    pageAdd = () => {
        if(this.state.index === 5) return false;
        if(this.state.star === this.state.number-5 ) {
            this.setState({
                index : this.state.index+1
            })
            return false;
        }
        this.setState({
            star : this.state.star+1
        })
    }
    pageReduce = () => {
        if(this.state.index === 0) {
            if(this.state.star === 1 ) return false;
            this.setState({
                star : this.state.star-1
            })
            return false;
        }
        this.setState({
            index : this.state.index-1
        })
    }
    render(){
        const pagingList = [];
        for (let i=0; i<6; i++) {
            pagingList.push(
                <li 
                    key={i}
                    className={ i===this.state.index?"active":"" }
                    onClick={ ()=>{ this.changeActive(i) } }
                >{ i+this.state.star }</li>
            )
        }
        if( this.state.number > 6 ){
            pagingList[4] = <li key={4}>...</li>
            pagingList[5] = <li 
                                key={5}
                                className={ 5===this.state.index?"active":"" }
                                onClick={ ()=>{ this.changeActive(5) } }
                            >{ this.state.number }</li>
            if(this.state.star === this.state.number-5){
                pagingList[4] = <li 
                                key={4}
                                className={ 4===this.state.index?"active":"" }
                                onClick={ ()=>{ this.changeActive(4) } }
                            >{ this.state.number-1 }</li>
            }
        }
        
        return(
            <ul className="home-paging">
                <li className="ion-ios-arrow-left"
                    onClick= { this.pageReduce }
                ></li>
                { pagingList }
                <li className="ion-ios-arrow-right"
                    onClick= { this.pageAdd }
                ></li>
            </ul>
        )
    }
}