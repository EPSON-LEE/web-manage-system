import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { Router, Route, Link, hashHistory } from 'react-router'
import routes from './modules/routes/routes.jsx'
import store from './modules/store.jsx'
import 'antd/dist/antd.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);