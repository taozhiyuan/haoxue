import React, { Component } from 'react'
import VideoPlay from './VideoPlay'
import { imgPath } from '../../global/axios'

export default class VideoItem extends Component {
    state = {
        play : false
    }
    playEvent = () => {
        this.setState({ play : !this.state.play })
    }
    render(){
        const { data } = this.props;
        const { play } = this.state;
        return(
            <li>
                { play && <VideoPlay url={ imgPath + data.coverKey } playEvent={ this.playEvent } /> }
                <aside>
                    <img src={ data.coverKey }alt=""/>
                    <div>
                        <i className="icon ion-md-arrow-dropleft-circle" 
                            onClick={ this.playEvent }
                        />
                    </div>
                </aside>
                <h4 className="ellipsis">{ data.videoName }</h4>
                <style jsx>{`
                    li {
                        padding : 10px;
                        width : 236px;
                        height : 200px;
                        float : left;
                        background-color : #FFF;
                    }
                    li:hover {
                        position: relative;
                        z-index : 9;
                        box-shadow: 0px 0px 10px #c2c2c2;
                    }
                        aside {
                            height : 135px;
                            border-radius : 5px;
                            overflow: hidden;
                            position : relative;
                        }
                            li:hover div {
                                visibility : visible;
                            }
                            video {
                                width : 100%;
                                height : 100%;
                            }
                            div {
                                position : absolute;
                                top : 0px;
                                left : 0px;
                                width : 100%;
                                height : 100%;
                                background-color : rgba(0, 0, 0, 0.5);
                                text-align : center;
                                line-height : 135px;
                                visibility : hidden;
                            }
                                i {
                                    font-size : 40px;
                                    color : #fff;
                                }
                        h4 {
                            padding-top : 18px;
                        }
                    `}</style>
            </li>
        )
    }
}
