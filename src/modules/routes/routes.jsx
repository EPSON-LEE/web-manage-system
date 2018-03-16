import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import App from '../components/App.jsx'
import About from '../containers/About/index.jsx'
import Inbox from '../components/Inbox.jsx'
import Message from '../components/Message.jsx'

export default (
  <Route path="/" component={App}>
    <Route path="about" component={About} />
    <Route path="inbox" component={Inbox}>
      <Route path="messages/:id" component={Message} />
    </Route>
  </Route>
)