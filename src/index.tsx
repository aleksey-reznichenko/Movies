import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {reportWebVitals} from './reportWebVitals'
import {setupStore} from './store'
import {App} from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)
const store = setupStore()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

reportWebVitals()
