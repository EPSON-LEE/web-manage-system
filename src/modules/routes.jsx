import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Wrapper from './components/Wrapper/index'
import Index from './components/Index/index'
import Inbox from './components/Inbox/Index'
import Message from './components/Message'

export default (
  <Route path="/" component={Wrapper}>
    <Route path="index" component={Index} />
    <Route path="inbox" component={Inbox}>
      <Route path="messages/:id" component={Message} />
    </Route>
  </Route>
)