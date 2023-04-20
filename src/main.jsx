import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { WalletProvider } from './context/WalletContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <WalletProvider>
        <React.StrictMode>  
            <App />
        </React.StrictMode>,  
    </WalletProvider>
)
