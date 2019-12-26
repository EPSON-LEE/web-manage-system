import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { Router, hashHistory } from 'react-router'
import routes from './modules/routes'
import store from './modules/store'
import 'antd/dist/antd.css'
import './style.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);