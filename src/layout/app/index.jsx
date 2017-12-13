import React from 'react'
import { Route, Router, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Login from 'Views/login'
import Header from 'Components/header'
import Body from 'Views/body'
import CssExample from 'Layout/cssExample'

import './style.scss'

const cookies = new Cookies()
const logined = () => cookies.get('token')

const App = () => (
  <HashRouter>
    <div id='app'>
      <Route exact path='/' render={() => (
        logined() ? (
          <Redirect to='/home' />
        ) : (
          <Redirect to='/login' />
        )
      )}/>

      <Switch>
        <Route exact path='/login' component={Login} />
        <Body />
      </Switch>
    </div>
  </HashRouter>
)
export default App