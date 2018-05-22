
// 分页器
import React, { Component } from 'react';
import './Paging.css';

export default class Paging extends Component {
    constructor(){
        super()
        this.state = {
            star : 1, //左第一个的数字
            index : 0, //active的位置
            number : 0 //分页总数量
        }
    }
    componentWillMount(){
        this.setState({
            number : this.props.length //获取分页数量
        })
        this.props.PagingCallback(this.state.star + this.state.index)//初始回传active
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            number : nextProps.length //获取分页数量
        })
    }
    changeActive = (parame) => {   //点击修改active
        const { number, star } = this.state;
        if(number > 6 && parame === 5 ){ //如果分页数量大于6 并且当前点击位置等于5
            this.setState({
                star : number - 5, //起始数字跳至总长度减5
                index : parame //位置跳至传进来的数字
            })
            this.props.PagingCallback(number-5+parame)//回传active
        }else{
            this.setState({
                index : parame //获取当前位置
            })
            this.props.PagingCallback(star + parame) //回传active
        }
        
    }
    pageAdd = () => { //增页
        const { index, number, star } = this.state;
        if(number > 6){
            if(index === 5 || star === number ) return false; //如果位置等于5，起始点等于总长度
            if(star === number-5 ){ //如果左起点等于总数减5
                this.setState({
                    index : index+1 //那么位置加1
                })
                this.props.PagingCallback(star + index+1)//回传active
            }else{
                this.setState({
                    star : star+1 //起始点加1
                })
                this.props.PagingCallback(star+1 + index)//回传active
            }
        }else{
            if(index === number-1 || star === number ) return false; //如果位置等于总长度减1，或者起始点等于总长度
            this.setState({
                index : index+1 //那么直接加1
            })
            this.props.PagingCallback(star + index+1)//回传active
        }
    }
    pageReduce = () => { //减页
        const { index, number, star } = this.state;
        //如果位置等于6 或者 当前位置等于分页数量（即分页数量小于6的时候）
        if(index === 0 && star === 1 ) return false;
        if(number > 6){
            if( index > 0 ){ //如果左起点等于总数减5
                this.setState({
                    index : index-1 //那么位置加1
                })
                this.props.PagingCallback(star + index-1)//回传active
            }else{
                this.setState({
                    star : star-1
                })
                this.props.PagingCallback(star-1 + index)//回传active
            }
        }else{
            this.setState({
                index : index-1 //那么直接加1
            })
            this.props.PagingCallback(star + index-1)//回传active
        }
    }
    render(){
        const pagingList = []; //渲染列表
        if(this.state.number === 0){ return false }
        const n = this.state.number > 6 ? 6 : this.state.number; // 如果总数大于6则返回6，否则返回总数
        for (let i=0; i<n; i++) {
            pagingList.push(
                <li 
                    key={i}
                    className={ i===this.state.index?"active":"" }
                    onClick={ ()=>{ this.changeActive(i) } }
                >{ i+this.state.star }</li> //先输出当前的i变量+起点数
            )
        }
        if( this.state.number > 6 ){ //如果总长度大于6
            pagingList[4] = <li key={4}>...</li>  //第五个Li标签输入...字符
            pagingList[5] = <li //第六个Li标签输出总长度数字
                                key={5}
                                className={ 5===this.state.index?"active":"" }
                                onClick={ ()=>{ this.changeActive(5) } }
                            >{ this.state.number }</li>
            if(this.state.star === this.state.number-5){ //如果起点等于总长度-5
                pagingList[4] = <li 
                                key={4}
                                className={ 4===this.state.index?"active":"" }
                                onClick={ ()=>{ this.changeActive(4) } }
                            >{ this.state.number-1 }</li> //输出总长度减1的数字
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