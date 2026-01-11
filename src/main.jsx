import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'

import './assets/styles/htmlReset.css'
import './assets/styles/style.css' 

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
