import React from 'react'
// import { useContext } from 'react';
// import { Web3ProviderContext } from "ethers-react";
import { useMetaMask } from "ethers-react";


const Header = () => {
  
  const { 
      isInstalledWallet, // Determine whether the wallet is installed
      isConnected, // Determine whether the wallet is connected
      connectedAccount, // Metamask current connected account
      connectWallect // Connect metamask function
  } = useMetaMask();

  console.log(isConnected)

  return (
    <header className="sticky top-0 p-5 px-24 flex items-start justify-between w-full z-20 xl:items-center">
        <div className="flex flex-row justify-between w-full">
            <div className="text-white">
                NYU BNF
            </div>
            <div className="text-white">
                <a className="p-2">Home</a>
                <a className="p-2">Our Team</a>
                {isConnected ? <a className="p-2">NFT Gallery</a> : <button onClick={connectWallect}> Connect! </button>}
            </div>
        </div>
    </header>
  )
}

export default Header