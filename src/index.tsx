import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { browser } from './mocks/browser'

if (process.env.NODE_ENV === 'development') {
  browser.start()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
