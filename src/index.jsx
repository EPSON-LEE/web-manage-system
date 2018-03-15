import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { Router, Route, Link, hashHistory } from 'react-router'
import routes from './modules/routes/routes.jsx'

ReactDOM.render(
  <Provider>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);