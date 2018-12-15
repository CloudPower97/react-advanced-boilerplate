import React from 'react'
import ReactDOM from 'react-dom'
import './i18n'
import './index.css'
import 'vendor/modernizr.min.js'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

const { PUBLIC_URL } = process.env

const app = (
  <BrowserRouter basename={PUBLIC_URL}>
    <App />
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
