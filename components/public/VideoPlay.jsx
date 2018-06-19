import React, { Component } from 'react'

export default class VideoPlay extends Component {
    myRef = React.createRef();
    play = () => {
        this.myRef.current.play()
    }
    render(){
        const { url } = this.props;
        return(
            <section onClick={ this.props.playEvent }>
                <div>
                    <video ref={ this.myRef } controls>
                        <source src={ url } type="video/mp4" />
                        <source src={ url } type="video/ogg" />
                    </video>
                </div>
                <style jsx>{`
                    section {
                        position : fixed;
                        top : 0;
                        left : 0;
                        width : 100%;
                        height : 100%;
                        z-index : 9;
                        text-align : center;
                        background-color : rgba(0, 0, 0, 0.5);
                    }
                    div {
                        width : 710px;
                        height : 440px;
                        position: relative;
                        top: 50%;
                        margin : -220px auto 0px;
                    }
                        video {
                            width : 100%;
                            height : 100%;
                        }
                `}</style>
            </section>
        )
    }
}
