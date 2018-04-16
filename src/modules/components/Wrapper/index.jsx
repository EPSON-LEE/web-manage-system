import React from 'react'
import { Link } from 'react-router'
import './index.css'

export default class App extends React.Component{
    render() {
      return (
        <div class="container">
          <header>
            <ul>
              <li><Link to="/index">Index</Link></li>
              <li><Link to="/inbox">Inbox</Link></li>
            </ul>
          </header>
          <nav>Navigation</nav>
          <main>
            {this.props.children}
          </main>
          <footer>Footer</footer>
        </div>
      )
    }
  }