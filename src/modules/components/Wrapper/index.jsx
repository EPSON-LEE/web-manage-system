import React from 'react'
import { Link } from 'react-router'
import {routeItem} from '../../../../const'
import {Button} from 'antd'
import Validate from '../Shared/Utils/PageWrapper'
import './index.css'

class App extends React.Component{

    handleLogout = () => {
      window.login = false
      this.props.router.push('/')
    }
    render() {
      return (
        <div className="container">
          <header>
            <span className='slogan'>This is a Slogan</span>
            <Button onClick={this.handleLogout}>登出</Button>
          </header>
          <nav>
            <div className='logo' />
              <ul className='item-list'>
              {
                routeItem.map(item => {
                  return (
                    <Link key={item} to={'/' + item}>
                      <li className={this.props.router.isActive(item) ? 'active' : 'link'}>
                        <div className='link-item'>
                          <span>{item}</span>
                        </div>              
                      </li>
                    </Link>
                  )
                })
              }
              </ul>
          </nav>
          <main>
            <div className='content'>
              {this.props.children}
            </div>
          </main>
          <footer>superYipe@2018 Created By LeeJiahao</footer>
        </div>
      )
    }
  }

  const AppEntry = Validate(App)
  export default AppEntry