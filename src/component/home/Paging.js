
// 分页器
import React, { Component } from 'react';
import './Paging.css';

export default class Paging extends Component {
    constructor(){
        super()
        this.state = {
            star : 1, //左第一个的数字
            index : 1, //active的位置
            number : 3 //分页数量
        }
    }
    componentWillMount(){
        this.setState({
            number : this.props.length //获取分页数量
        })
    }
    changeActive = (parame) => {
        this.setState({
            index : parame+1 //获取当前位置
        })
        if(this.state.number > 6 && parame === 5 ){ //如果分页数量小于6 并且 当前点击位置等于5
            this.setState({
                star : this.state.number - 5 //起始数字跳至总长度减5
            })
        }
    }
    pageAdd = () => { //增页
        //如果位置等于5 或者 当前位置等于分页数量（即分页数量小于6的时候）
        if(this.state.index === 6 || this.state.number === this.state.index ) return false;
        if(this.state.star === this.state.number-5 ) { //如果左起点等于总数减5
            this.setState({
                index : this.state.index+1 //那么位置加1
            })
            this.props.PagingCallback(this.state.index)//回调函数
        }else if(this.state.number <= 6){ //如果总数小于6
            this.setState({
                index : this.state.index+1 //那么直接加1
            })
            this.props.PagingCallback(this.state.index)//回调函数
        }else{
            this.setState({
                star : this.state.star+1
            })
        }
    }
    pageReduce = () => { //减页
        if(this.state.index === 1) { //如果当前位置是1
            if(this.state.star === 1 ) return false; //如果起点是1 
            this.setState({
                star : this.state.star-1
            })
            return false;
        }
        this.setState({
            index : this.state.index-1
        })
        this.props.PagingCallback(this.state.index-1)//回调函数
    }
    render(){
        const pagingList = [];
        const n = this.state.number > 6 ? 6 : this.state.number;
        for (let i=0; i<n; i++) {
            pagingList.push(
                <li 
                    key={i}
                    className={ i===this.state.index-1?"active":"" }
                    onClick={ ()=>{ this.changeActive(i) } }
                >{ i+this.state.star }</li>
            )
        }
        if( this.state.number > 6 ){
            pagingList[4] = <li key={4}>...</li>
            pagingList[5] = <li 
                                key={5}
                                className={ 5===this.state.index-1?"active":"" }
                                onClick={ ()=>{ this.changeActive(5) } }
                            >{ this.state.number }</li>
            if(this.state.star === this.state.number-5){
                pagingList[4] = <li 
                                key={4}
                                className={ 4===this.state.index-1?"active":"" }
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