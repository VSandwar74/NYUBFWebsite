import React from 'react'
import { motion } from "framer-motion";
import Company from './Company';
import companies from '../assets/companies.json'
import partners from '../assets/partners.json'

const CompaniesCard = () => {

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-around md:justify-center xl:space-y-6 mx-auto items-center'>

          <h3 className='absolute top-24 uppercase tracking-[5px] md:tracking-[20px] text-white text-2xl'>
              Companies
          </h3>

          <div className='h-4 w-full'/>

          <h3 className='text-center top-36 uppercase w-4/5 md:w-full tracking-[3px] text-white text-sm'>
              Who we work for!
          </h3>

          <div className='pt-16 md:pt-0 grid grid-cols-4 md:grid-cols-7 gap-5'>
            {companies.techCompanies.map((company, i) => (
              <Company 
                key={i}
                name={company.name}
                source={company.image}
                directionLeft={false}
                status={company.alumni}
              />
            ))}
          </div>
          
          <h3 className='text-center top-36 uppercase w-4/5 md:w-full tracking-[3px] text-white text-sm'>
              Who we work with!
          </h3>

          <div className='pt-16 md:pt-0 grid grid-cols-4 md:grid-cols-7 gap-5'>
            {partners.techCompanies.map((company, i) => (
              <Company 
                key={i}
                name={company.name}
                source={company.image}
                directionLeft={true}
                status={company.alumni}
              />
            ))}
          </div>

          <div>
            <p>And more we couldn't fit:</p>
            <div className='overflow-y-scroll w-full'>The Graph Foundation, Solana Foundation, EY, Deloitte, NEAR Protocol, Binance Academy, Sequence Wallet, Polygon, Chainlink, QuickNode, Alchemy, ETH Global, JP Morgan Onyx, Marcum LLP, Paris Basketball, Ava Labs, Electric Capital, Krause House, Origin Protocol, Certiik, Surmount.ai, Martian Wallet, Agoric Chain, Blockchain Acceleration Foundation, Curve, Gammaswap, Gamma Strategies, and Premia Finance!</div>
          </div>

    </motion.div>

  )
}

export default CompaniesCard