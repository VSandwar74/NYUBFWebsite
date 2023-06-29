import React, { useContext } from 'react'
import { WalletContext } from '../context/WalletContext';
import { motion } from "framer-motion";

const Gallery = () => {

    const { currentAccount } = useContext(WalletContext);
    const isConnected = currentAccount != ""
    
    const numbers = [];
    for (let i = 1; i <= 16; i++) {
    numbers.push(i);
    }
  
    return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
    
        <div className="flex flex-col items-center justify-center h-screen">
            <h3 className='uppercase tracking-[5px] md:tracking-[20px] text-white text-2xl'>NFT Gallery</h3>
                <div className='flex flex-col items-start w-screen mt-4 md:mt-16 justify-around'>
                    <h5 className='font-semibold tracking-[10px] top-0 ml-4 md:ml-20 mb-6'>Your BnFTs</h5>
                    {isConnected ? <img src={`src/assets/images/${"74"}.png`} className='h-32 w-32 object-cover ml-16'/> : <p className='flex flex-col text-center w-full'>Connect your wallet to see your NFTs! </p> }
                </div>
                <div className='flex flex-col items-start w-screen mt-16'>
                    <h5 className='font-semibold tracking-[10px] top-0 ml-4 md:ml-20 mb-6' >Full Collection</h5>
                    <div className='grid grid-cols-4 md:grid-cols-8 gap-5 px-10 w-screen justify-around'>
                        {numbers.map((n, i) => (
                            // <img src={`src/assets/images/${n}.png`} className='scale-75'/>
                            <img src={`https://ipfs.io/ipfs/bafybeihw3uuveu7iqqncvcxmpe2nxf5w2projr6hjjjql72czcshkqpwsa/${n}.png`} className='md:scale-75'/>
                        ))}
                    </div>
                </div>
            <div className='w-full absolute top-[30%] bg-[white]/10 left-0 h-[500px] -skew-y-12'/>
        </div>
    </motion.div>
  )
}

export default Gallery