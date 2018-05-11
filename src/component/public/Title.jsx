
// 关于我们 》核心价值 > 标题
import React from 'react';
import "./Title.css";

const Title = ( props ) => (
    <div className="about-us-title">
        <h1>{ props.children }</h1>
    </div>
)
export default Title;