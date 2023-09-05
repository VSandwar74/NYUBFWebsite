import React from 'react'
import { motion } from "framer-motion";

const Pillars = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
    
        <div className="flex flex-col items-center justify-center md:justify-around h-screen">
            <h3 className='uppercase tracking-[5px] md:tracking-[20px] text-white text-lg md:text-2xl'>Our Programs</h3>
                <div className='flex flex-row flex-wrap space-x-2 md-space-x-6 min-h-[80%]'>
                    <div className='h-full bg-[white]/10 rounded-xl p-2 px-4'>
                        <h3 className='text-center top-36 uppercase w-4/5 md:w-full tracking-[3px] text-white text-sm'>
                            Development
                        </h3>
                        <ul>
                            <li>Our team is dedicated to....</li>
                            <li>We've done ....</li>
                            <li>Our biggest accomplishment is ...</li>
                            <li>Registration opens....</li>
                        </ul>
                    </div>
                    <div className='h-full bg-[white]/10 rounded-xl p-2 px-4'>
                        <h3 className='text-center top-36 uppercase w-4/5 md:w-full tracking-[3px] text-white text-sm'>
                            Development
                        </h3>
                        <ul>
                            <li>Our team is dedicated to....</li>
                            <li>We've done ....</li>
                            <li>Our biggest accomplishment is ...</li>
                            <li>Registration opens....</li>
                        </ul>
                    </div>
                    <div className='h-full bg-[white]/10 rounded-xl p-2 px-4'>
                        <h3 className='text-center top-36 uppercase w-4/5 md:w-full tracking-[3px] text-white text-sm'>
                            Development
                        </h3>
                        <ul>
                            <li>Our team is dedicated to....</li>
                            <li>We've done ....</li>
                            <li>Our biggest accomplishment is ...</li>
                            <li>Registration opens....</li>
                        </ul>
                    </div>
                    <div className='h-full bg-[white]/10 rounded-xl p-2 px-4'>
                        <h3 className='text-center top-36 uppercase w-4/5 md:w-full tracking-[3px] text-white text-sm'>
                            Development
                        </h3>
                        <ul>
                            <li>Our team is dedicated to....</li>
                            <li>We've done ....</li>
                            <li>Our biggest accomplishment is ...</li>
                            <li>Registration opens....</li>
                        </ul>
                    </div>
                </div>
                {/* <div className="flex flex-col py-10 px-2 md:px-20 rounded-l-lg w-[90%] h-fit text-center mt-4">
                    <p className="text-xs md:text-base">
                        NYU BF is a unique student organization devoted to expanding students' understanding of blockchain technology and the FinTech ecosystem, as well as the legal, economic, social, and political challenges posed by these innovative technologies in the US and globally. The club consists of 3 teams: Development, Defi, and Research teams. The development works on a semester long project that develops practical web3 projects. Previous projects include a Dune Analytics dashboard to uncover insights about the Ethereum Merge and a NFT collection backed by BNF's unique ERC-20 token.
                    </p>
                    <ul className="text-xs md:text-base">
                        <li>Development</li>
                            <ul>
                                <li>Spring 2023: Launching an NFT and Token project for the NYU Blockchain Community.</li>
                            </ul>
                        <li>Defi</li>
                            <ul>
                                <li>Spring 2023: Working with Surmount AI and Qredo to explore quantitative trading frameworks for crypto assets.</li>
                            </ul>
                        <li>Research</li>
                        <   ul>
                                <li>Spring 2023: Consulting on a project with Paris Basketball to create an NFT project for their fans.</li>
                            </ul>
                    </ul>
                </div> */}

            <div className='w-full absolute top-[30%] bg-[white]/10 left-0 h-[500px] -skew-y-12'/>
        </div>
    </motion.div>
  )
}

export default Pillars;
