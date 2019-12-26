import React from 'react'
import Login from '../../Login'
import { User } from './utils'

export default function validateLayer(Component) {
    return class Wrapper extends React.Component {
        constructor(){
            super()
        }
        render() {
            if(User.userStatus() !== 'true') {
                // 登录页面
                return <Login {...this.props} />
            } else {
                // 首页
                return <Component {...this.props} />
            }
        }
    }
}