import React from 'react'
import { Link } from 'react-router'
import './index.css'

export default class App extends React.Component{
    render() {
      return (
        <div className="container">
          <header>
            <span className='slogan'>This is a Slogan</span>
          </header>
          <nav>
            <ul>
              <li>
                <Link to="/index">
                  <span className='link'>Index</span>
                </Link>
              </li>
              <li>
                <Link to="/inbox">
                  <span className='link'>Inbox</span>
                </Link>
              </li>
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