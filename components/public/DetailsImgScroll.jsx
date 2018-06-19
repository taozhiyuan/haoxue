import React, { Component } from 'react'
import { imgPath } from '../../global/axios'

export default class DetailsImgScroll extends Component {
    state = {
        imgList : this.props.data || [],
        n : 0
    }
    right = () => {
        if(this.state.n === this.state.imgList.length-1) return false;
        this.setState((prevState, props)=>({
            n : prevState.n+1
        }))
    }
    left = () => {
        if(this.state.n === 0) return false;
        this.setState((prevState, props)=>({
            n : prevState.n-1
        }))
    }
    render(){
        const { imgList, n } = this.state;
        return(
            <div>
                <ul style={{ 
                        width : imgList.length * 100 + "%" ,
                        transform: `translateX(${-n/imgList.length*100}%)`
                    }}>
                    { imgList.map((item, index)=>(
                        <li key={ index }><img src={ imgPath + item } alt="" /></li>
                    )) }
                </ul>
                <aside 
                    className="icon ion-ios-arrow-back"
                    onClick={ this.left }
                ></aside>
                <aside 
                    className="icon ion-ios-arrow-forward"
                    onClick={ this.right }
                ></aside>
                <span>{n+1}/{ imgList.length }</span>
                <style jsx>{`
                    div {
                        width : 520px;
                        height : 325px;
                        margin-right : 30px;
                        background-color : #666;
                        float : left;
                        overflow : hidden;
                        position : relative;
                    }
                        ul {
                            font-size : 0;
                            height : 100%;
                            transition : all 0.5s;
                        }
                            li {
                                width : 520px;
                                height : 100%;
                                display: inline-block;
                            }
                            aside {
                                width : 20px;
                                height : 50px;
                                background-color : rgba(0, 0, 0, 0.5);
                                margin-top : -25px;
                                position : absolute;
                                top : 50%;
                                cursor : pointer;
                                color : #f5a00a;
                                line-height : 50px;
                                text-align : center;
                            }
                            div > aside:fist-of-type {
                                left : 0px;
                            }
                            div > aside:last-of-type {
                                right : 0px;
                            }
                            span {
                                display: block;
                                line-height : 20px;
                                color : #f5a00a;
                                padding : 0px 10px;
                                font-size : 12px;
                                position : absolute;
                                right : 20px;
                                bottom : 20px;
                                border-radius : 10px;
                                background-color : rgba(0, 0, 0, 0.5);
                            }
                `}</style>
            </div>
        )
    }
}
