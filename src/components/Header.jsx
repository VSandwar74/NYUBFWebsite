import React, { useContext, useEffect } from 'react'
import { WalletContext } from '../context/WalletContext';

const Header = () => {

  const { connectWallet, currentAccount } = useContext(WalletContext);
  const isConnected = currentAccount != ""

  return (
    <header className="sticky top-0 p-5 md:px-24 flex items-start justify-between w-full z-20 xl:items-center">
        <div className="flex flex-row justify-between w-full">
            {/* <div className="py-1 md:p-0 text-white">
                NYU BNF
            </div> */}
            <img 
                className='top-0 left-0 h-12 py-1 md:p-0 '
                src="https://drive.google.com/uc?id=17sLQ4IMiInbTBcCK8rxkGEK8vbILVLAM" 
                alt='BnF Logo'/>
            <div className="text-white">
                <a className="p-2">Home</a>
                <button type="button"  className='rounded-lg p-1 mx-1 bg-purple-600'>
                        <a href='https://medium.com/@nyublockchainfintech' className='p-2'>Join our Medium!</a>
                </button>
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