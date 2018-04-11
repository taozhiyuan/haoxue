import React, { Component } from 'react';

const css = {
    height : 40,
    borderLeft : "2px solid #f39e09",
    color : "#f39e09",
    borderBottom : "1px solid #c2c2c2",
    paddingLeft : 20,
    lineHeight : "40px",
    fontSize : 14
}
const Title = ( props ) => (
    <h5 style={ css }>{ props.children }</h5>
)
export default Title;