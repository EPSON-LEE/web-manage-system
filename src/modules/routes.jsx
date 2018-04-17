import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Wrapper from './components/Wrapper/index'
import Index from './components/Index/index'
import List from './components/ArticleList/index'
import Message from './components/Message'
import Editor from './components/Editor/index'
import Charts from './components/Charts/index'

export default (
  <Route path="/" component={Wrapper}>
    <IndexRoute component={Index} />
    <Route path="/Index" component={Index} />
    <Route path="/Editor" component={Editor} />
    <Route path="/Charts" component={Charts} />
    <Route path="/List" component={List}>
      <Route path="messages/:id" component={Message} />
    </Route>
  </Route>
)