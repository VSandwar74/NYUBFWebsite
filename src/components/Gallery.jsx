import React, { useContext } from 'react'
import { WalletContext } from '../context/WalletContext';
import { motion } from "framer-motion";

const Gallery = () => {

    const { currentAccount } = useContext(WalletContext);
    const isConnected = currentAccount != ""
  
    return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
    
        <div className="flex flex-col items-center justify-around h-screen">
            <h3 className='uppercase tracking-[20px] text-white text-2xl'>NFT Gallery</h3>
                {isConnected ? <></> : <p>Connect your wallet to see your NFTs! </p> }
            <div className='w-full absolute top-[30%] bg-[white]/10 left-0 h-[500px] -skew-y-12'/>
        </div>
    </motion.div>
  )
}

export default Gallery