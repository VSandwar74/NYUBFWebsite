import React from 'react'
import { motion } from 'framer-motion'

const StatsCard = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        
            <div className="flex flex-col items-center justify-around h-screen">
                <h3 className='uppercase tracking-[20px] text-white text-2xl'>Statistics</h3>
                    <div className="flex flex-col py-10 px-20 rounded-l-lg w-[90%] h-fit text-center mt-4">
                        <p className="text-base">
                            NYU BF is a unique student organization devoted to expanding students' understanding of blockchain technology and the FinTech ecosystem, as well as the legal, economic, social, and political challenges posed by these innovative technologies in the US and globally.
                        </p>
                        <ul>
                            <li>Main item 1</li>
                            <li>Main item 2
                                <ul>
                                    <li>Sub item 1</li>
                                    <li>Sub item 2</li>
                                    <li>Sub item 3</li>
                                </ul>
                            </li>
                            <li>Main item 3</li>
                        </ul>
                    </div>

                <div className='w-full absolute top-[30%] bg-[white]/10 left-0 h-[500px] skew-y-12'/>
            </div>
        </motion.div>
        )
    }

export default StatsCard