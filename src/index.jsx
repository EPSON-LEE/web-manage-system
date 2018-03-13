import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import routes from './modules/routes/routes.jsx'

ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('app')
);