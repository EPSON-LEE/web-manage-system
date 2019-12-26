import React from 'react'
import { Link } from 'react-router'
import {routeItem} from '../../const'
import Validate from '../Shared/Utils/IndentifyValidate'
import { User } from '../Shared/Utils/utils'
import './index.css'

class App extends React.Component{

    handleLogout = () => {
      User.Logout()
      this.props.router.push('/')
      console.error(User)
    }
    render() {
      return (
        <div className="container">
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