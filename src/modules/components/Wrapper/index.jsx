import React from 'react'
import { Link } from 'react-router'
import './index.css'

export default class App extends React.Component{
    render() {
      return (
        <div className='content'>
          <ul>
            <li><Link to="/index">Index</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
          </ul>
          {this.props.children}
        </div>
      )
    }
  }