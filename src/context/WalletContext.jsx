import React, { useEffect, useState } from "react";
// import { ethers } from 'ethers';
// import { contractABI, contractAddress } from '../utils/constants';

export const WalletContext = React.createContext();

const { ethereum } = window;

export const WalletProvider = ({ children }) => {
 
    const [currentAccount, setCurrentAccount] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

            setCurrentAccount(accounts[0]);
        } catch(error) {
            console.log(error)

            throw new Error("No ethereum object.")
        }
    }

    const checkIfWalletIsConnected = async () => {

        try {

            if(!ethereum) return alert("Please install metamask");
    
            const accounts = await ethereum.request({ method: 'eth_accounts' })
    
            if  (accounts.length) {
                setCurrentAccount(accounts[0]);
                // getAllTransactions();
            } else {
                console.log('No accounts found')
            }

        } catch(error) {
            console.log(error)

            throw new Error("No ethereum object.")
        }


    }

    useEffect(() => {
        checkIfWalletIsConnected();
        // checkIfTransactionsExist();
    }, []);

    return (
        <WalletContext.Provider value={{ connectWallet, currentAccount, isLoading }}>
            {children}
        </WalletContext.Provider>
    )
}