import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'  // Make sure to include .jsx extension
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)