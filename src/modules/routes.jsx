import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Wrapper from './components/Wrapper'
import Index from './components/Index'
import Hook from './components/Hook'
import List from './components/ArticleList'
import Editor from './components/Editor'
import Charts from './components/Charts'
import Table from './components/Table'
import HOC from './components/HOC'
import HOC2 from './components/HOC/index2'
import Ref from './components/Ref'
import DnD from './components/DnD'
import ErrorHandler from './components/ErrorHandler'
import NotFoundPage from './components/NotFoundPage'

export default (
  <Route>
    <Route path="/" component={Wrapper}>
      <IndexRoute component={Index} />
      <Route path="/Index" component={Index} />
      <Route path="/Hook" component={Hook} />
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