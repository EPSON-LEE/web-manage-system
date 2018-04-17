import React from 'react'
import { Link } from 'react-router'
import {routeItem} from '../../../../const'
import './index.css'

export default class App extends React.Component{
    render() {
      return (
        <div className="container">
          <header>
            <span className='slogan'>This is a Slogan</span>
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