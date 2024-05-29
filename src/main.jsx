import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PreviewProvider from './context/contextCharatersProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PreviewProvider>
      <App />
    </PreviewProvider>
  </BrowserRouter>,
)
