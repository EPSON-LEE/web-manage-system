import React from 'react'
import { Link } from 'react-router'

export default class App extends React.Component{
    render() {
      return (
        <div>
          <h1>Wrap</h1>
          <ul>
            <li><Link to="/index">Index</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
          </ul>
          {this.props.children}
        </div>
      )
    }
  }