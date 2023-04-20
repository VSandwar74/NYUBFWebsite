import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Web3ContextProvider } from 'ethers-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Web3ContextProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>,  
  </Web3ContextProvider>
)
