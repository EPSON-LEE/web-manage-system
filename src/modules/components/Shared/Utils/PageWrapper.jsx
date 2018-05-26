import React from 'react'
import Login from '../../Login/index'

export default function validateLayer(Component) {
    return class Wrapper extends React.Component {
        constructor(){
            super()
        }
        render() {
            if(!window.login) {
                // 登录页面
                return <Login {...this.props} />
            } else {
                // 首页
                return <Component {...this.props} />
            }
        }
    }
}