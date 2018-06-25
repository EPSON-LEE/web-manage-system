import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Wrapper from './components/Wrapper/index'
import Index from './components/Index/index'
import List from './components/ArticleList/index'
import Message from './components/Message'
import Editor from './components/Editor/index'
import Charts from './components/Charts/index'
import Table from './components/Table/index'
import HOC from './components/HOC/index'
import HOC2 from './components/HOC/index2'
import Ref from './components/Ref/index'
import DnD from './components/DnD/index.jsx'
import ErrorHandler from './components/ErrorHandler/index'
import NotFoundPage from './components/NotFoundPage/index'

export default (
  <Route>
    <Route path="/" component={Wrapper}>
      <IndexRoute component={Index} />
      <Route path="/Index" component={Index} />
      <Route path="/Editor" component={Editor} />
      <Route path="/Charts" component={Charts} />
      <Route path="/List" component={List} />
      <Route path="/Table" component={Table} />
      <Route path="/HOC" component={HOC} />
      <Route path="/HOC2" component={HOC2} />
      <Route path="/Ref" component={Ref} />
      <Route path="/ErrorHandler" component={ErrorHandler} />
      <Route path="/DnD" component={DnD} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
)