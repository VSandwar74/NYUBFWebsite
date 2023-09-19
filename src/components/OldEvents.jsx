import React from 'react'
import { motion } from "framer-motion";
import oldevents from '../assets/oldevents.json';

const OldEvents = () => {


  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[5px] md:tracking-[20px] text-white text-2xl'>
            Past Events
        </h3>

        {/* <div className='w-full text-sm md:text-lg text-center items-center md:mt-6'>
            <ul className=''>
                <li>Blockchain & Fintech Bootcamp</li>
                <li>KlimaDAO: Fighting Climate Change through DeFi</li>
                <li>Electric Capital: VC in Web3</li>
                <li>Women in Web3 & Fintech</li>
                <li>An Introduction to Cryptoderivatives</li>
                <li>Harmonic Chain: Crypto & Regulation</li>
                <li>Binance Academy: DeFi on Binance</li>
                <li>The Ethics of Web3</li>
                <li>B&F Capstone</li>
                <li>Fundamentals of Blockchain & Fintech</li>
                <li>Curve, Gammaswap, Gamma Strategies, Premia Finance: A Tour of DeFi</li>
                <li>The Political Economy of Crypto & Libertarian Philosophy</li>
                <li>An Introduction to Zero-Knowledge Proofs</li>
                <li>dYdX: An Introduction to Perpetual Futures</li>
                <li>Marcum LLP: Essentials of Crypto Accounting</li>
                <li>CertiK: Foundations of Smart Contract Security</li>
            </ul>
        </div> */}

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-white/20 scrollbar-thumb-[#F7AB0A]/80'> 
            {oldevents.events.map((event, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center py-20 px-5 md:px-20 md:p-44 h-screen' key={i}>
                    {/* <motion.img 
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='h-1/4 md:h-1/2'
                        src={event.image} 
                        alt='NYU BnF Event'
                        /> */}

                    <div className='md:space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-lg md:text-4xl font-semibold text-center flex flex-col'>
                            <span className='underline decoration-gray-500/50'>
                                {event.title}
                            </span>{" "}
                            {/* <span className='text-base md:text-2xl font-normal italic'>
                                {event.date}
                            </span> */}
                        </h4>
                        <p className='text-sm md:text-lg text-center md:text-left'>
                            {event.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        {/* <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/> */}
    </motion.div>
  )
}

export default OldEvents