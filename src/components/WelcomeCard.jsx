import React from 'react'
import { motion } from "framer-motion";

const WelcomeCard = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
    
        <div className="flex flex-col items-center justify-center md:justify-around h-screen">
            <h3 className='uppercase tracking-[5px] md:tracking-[20px] text-white text-lg md:text-2xl'>Our Organization</h3>
                <div className="flex flex-col py-10 px-2 md:px-20 rounded-l-lg w-[90%] h-fit text-center mt-4">
                    <p className="text-base md:text-lg">
                        NYU Blockchain & Fintech is the leading force at NYU in educating students about the intricacies of technology-enabled advancements in the financial sector, decentralized finance, and Web3 Development. Our mission is to provide unique hands-on experiences through partnerships with founders, DAOs, and industry professionals. 
                    </p>
                    <a href='https://medium.com/@nyublockchainfintech' className=''>
                        <button className='px-4 p-2 bg-purple-600 text-white rounded-md mt-6 cursor-pointer'>
                                Join our Medium!
                        </button>
                    </a>
                </div>

            <div className='w-full absolute top-[30%] bg-[white]/10 left-0 h-[500px] -skew-y-12'/>
        </div>
    </motion.div>
  )
}

export default WelcomeCard
