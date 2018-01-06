import React from 'react'
import { Route, IndexRoute } from 'react-router'
import UI from './views/UI'
import About from './views/About'

const Home = () => <div>HOME</div>

export default (
  <Route path='/' component={UI}>
    <IndexRoute component={Home} />
    <Route path='/about' component={About} />
  </Route>
)
