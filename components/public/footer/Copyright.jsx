import React, { Component } from 'react'

export default class Copyright extends Component {
    render(){
        return(
            <h5 className="copyright">
                Copyright 好学家 湘ICP备12013432号-1 湘公网安备43010302000175号 本站由阿里云提供计算与安全服务
                <style jsx>{`
                    h5 {
                        border-top : 1px solid #2f353b;
                        line-height : 75px;
                        text-align : center;
                        color : #505b64;
                    }
                `}</style>
            </h5>
        )
    }
}
