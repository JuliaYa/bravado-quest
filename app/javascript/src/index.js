/* eslint "import/imports-first": 0 */
/* eslint no-undef: 0 */
/* eslint import/extensions: 0 */
/* eslint react/jsx-filename-extension:0 */
import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import { Provider } from 'react-redux'
import App from './modules/common/scenes/App.jsx'
import createStore from './store';

const store = createStore();

// for bundling your styles
// import './bundle.scss'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.querySelector('.react-app'))
