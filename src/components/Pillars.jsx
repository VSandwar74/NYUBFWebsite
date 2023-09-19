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
                <div className='flex flex-row flex-wrap space-x-2 md-space-x-6 min-h-[80%] justify-around'>
                    <div className='w-[20%] h-full bg-[white]/10 rounded-xl p-2 px-4 text-sm flex flex-col items-center'>
                        <img
                            src='src/assets/pics/investments icon.png'
                            className='w-8'
                        />
                        <h3 className='text-center top-36 uppercase w-4/5 md:w-full tracking-[3px] text-white text-sm'>
                            Investments
                        </h3>
                        <ul>
                            <li><br/></li>
                            <li>The mission of our Investments program is to focus on applying traditional trading frameworks to crypto and digital assets within the world of decentralized finance. Through partnerships with NYU professors, alumni, and our industry partners, we educate our students on valuation fundamentals, financial markets, investment frameworks, decentralized finance, and derivatives.</li>
                            <li><br/></li>
                            <li>This semester (F23’), we’re proud to announce that we will be partnering with Collab+Currency and Origin Protocol to take on two projects: acting as investment analysts and governance participants. We will have over $100k+ assets under management for this semester, providing our members with real-world experience in valuating, trading, DeFi yield farming, and beyond. </li>
                        </ul>
                    </div>
                    <div className='w-[20%] h-full bg-[white]/10 rounded-xl p-2 px-4 text-sm flex flex-col items-center'>
                        <img
                            src='src/assets/pics/consulting icon.png'
                            className='w-8'
                        />
                        <h3 className='text-center top-36 uppercase w-4/5 md:w-full tracking-[3px] text-white text-sm'>
                            Consulting
                        </h3>
                        <ul>
                            <li><br/></li>
                            <li>Our Consulting program asks itself one significant question: “How can we apply decentralized infrastructure to improve the world as we know it?” We aim to work as consultants for various businesses across the globe, providing them with solutions to the various problems they may have. </li>
                            <li><br/></li>
                            <li>This semester (F23’), we’re proud to announce our partnership with Ava Labs!</li>
                        </ul>
                    </div>
                    <div className='w-[20%] h-full bg-[white]/10 rounded-xl p-2 px-4 text-sm flex flex-col items-center'>
                        <img
                            src='src/assets/pics/dev icon.png'
                            className='w-8'
                        />
                        <h3 className='text-center top-36 uppercase w-4/5 md:w-full tracking-[3px] text-white text-sm'>
                            Development
                        </h3>
                        <ul>
                            <li><br/></li>
                            <li>Our Development program aims to build a variety of different projects across the entire web3 ecosystem. We first aim to educate our members on the foundations of the smart contract development – x – and then use the rest of our semester to collaborate on a project together. </li>
                            <li><br/></li>
                            <li>This semester (F23’), we will be developing a decentralized application (dApp) on Coinbase’s highly anticipated L2 – Base! We will be building a protocol to host poker games and tournaments in a decentralized manner, mitigating the risk of privacy infringement, ensuring transparency across financial transactions, and removing the need for KYC, a process of customer identification by financial institutions. We are excited about what’s to come, and we aim to keep you posted through the entire development process! </li>
                        </ul>
                    </div>
                    <div className='w-[20%] h-full bg-[white]/10 rounded-xl p-2 px-4 text-sm flex flex-col items-center'>
                        <img
                            src='src/assets/pics/mentorship icon.png'
                            className='w-8'
                        />
                        <h3 className='text-center top-36 uppercase w-4/5 md:w-full tracking-[3px] text-white text-sm'>
                            Mentorship
                        </h3>
                        <ul>
                            <li><br/></li>
                            <li>Our Mentorship program focuses on ground-up education of various Web3 and fintech concepts, while also emphasizing the importance of career development. Each semester, we take on a cohort of around 8-10 freshmen and host weekly workshops to cover different topics over the course of 10-weeks. </li>
                            <li><br/></li>
                            <li>Some of the workshops we will hold include: Blockchain 101, An Overview of Ethereum’s Architecture, An Introduction to Rollups and ZKPs, Resume-Building with Stern Professional Development & Career Education (PDCE), Interviewing 101, How to Crack a Coffee Chat, and much more! </li>
                        </ul>
                    </div>
                </div>
        </div>
    </motion.div>
  )
}

export default Pillars;
