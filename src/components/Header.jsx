import React, { useContext, useEffect } from 'react'
import { WalletContext } from '../context/WalletContext';

const Header = () => {

  const { connectWallet, currentAccount } = useContext(WalletContext);
  const isConnected = currentAccount != ""

  return (
    <header className="sticky top-0 p-5 px-24 flex items-start justify-between w-full z-20 xl:items-center">
        <div className="flex flex-row justify-between w-full">
            <div className="text-white">
                NYU BNF
            </div>
            <div className="text-white">
                <a className="p-2">Home</a>
                <a className="p-2">Our Team</a>
                {isConnected ? <button><a className="p-2">NFT Gallery</a></button> : 
                <button 
                    type="button" 
                    onClick={connectWallet}
                    className='rounded-lg p-1 mx-1 bg-white'
                >
                   <a className="p-2 text-[#391772]">Connect</a>
                </button>
                }
            </div>
        </div>
    </header>
  )
}

export default Header