import React from 'react'
import { motion } from 'framer-motion'

const StatsCard = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        
            <div className="flex flex-col items-center justify-center md:justify-around h-screen">
                <h3 className='uppercase tracking-[5px] md:tracking-[20px] text-white text-2xl'>Statistics</h3>
                    <div className="flex flex-col py-10 px-2 md:px-20 rounded-l-lg w-[90%] h-fit text-center mt-4">
                        <p className="text-xs md:text-base">
                            NYU BF is a unique student organization devoted to expanding students' understanding of blockchain technology and the FinTech ecosystem, as well as the legal, economic, social, and political challenges posed by these innovative technologies in the US and globally.
                        </p>
                        <ul className="text-xs md:text-base">
                            <li>Our Community
                                <ul>
                                    <li>817+ Instagram Followers</li>
                                    <li>200+ Mailing List Subscribers</li>
                                    <li>60+ Members</li>
                                    <li>250+ Discord Users</li>
                                </ul>
                            </li>
                            <li>LionHack 2023
                                <ul>
                                    <li>Over 300 students from 30 Universities across North America</li>
                                    <li>$51,000 distributed in Prize Money</li>
                                    <li>15 Workshops, 20 Sponsors, 40+ Industry Professionals across 3 Days</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                <div className='w-full absolute top-[30%] bg-[white]/10 left-0 h-[500px] skew-y-12'/>
            </div>
        </motion.div>
        )
    }

export default StatsCard
