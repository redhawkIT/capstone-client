import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import configureStore from './store'
import App from './App'

const initialState = {}
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <AppContainer>
    <App store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default
    render(
      <AppContainer>
        <NewApp store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
