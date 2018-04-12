import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './components/App'
import Index from './components/Index/index'
import Inbox from './components/Inbox'
import Message from './components/Message'

export default (
  <Route path="/" component={App}>
    <Route path="index" component={Index} />
    <Route path="inbox" component={Inbox}>
      <Route path="messages/:id" component={Message} />
    </Route>
  </Route>
)