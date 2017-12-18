/* eslint "import/imports-first": 0 */
/* eslint no-undef: 0 */
/* eslint import/extensions: 0 */
/* eslint react/jsx-filename-extension:0 */
import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './rootReducer'
import rootSaga from './rootSagas'
import App from './modules/common/scenes/App.jsx'

// for bundling your styles
// import './bundle.scss'

const devtools = window.devToolsExtension || (() => noop => noop)
const sagaMiddleware = createSagaMiddleware()
const middlewares = [
  sagaMiddleware,
]
const enhancers = [
  applyMiddleware(...middlewares),
  devtools()
]
const store = createStore(
  reducers,
  compose(...enhancers)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.querySelector('.react-app'))
