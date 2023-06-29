import React from 'react'
import { motion } from "framer-motion";
import Company from './Company';
import companies from '../assets/companies.json'

const CompaniesCard = () => {

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-around md:justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[5px] md:tracking-[20px] text-white text-2xl'>
            Companies
        </h3>

        <h3 className='absolute text-center top-36 uppercase w-4/5 md:w-full tracking-[3px] text-white text-sm'>
            Hover over a company for partner or alumni status
        </h3>

        <div className='pt-16 md:pt-0 grid grid-cols-4 md:grid-cols-7 gap-5'>
          {companies.techCompanies.map((company, i) => (
            <Company 
              key={i}
              name={company.name}
              source={company.image}
              directionLeft={(i < companies.techCompanies.length/2)}
              status={company.alumni}
            />
          ))

          }
        </div>
    </motion.div>

  )
}

export default CompaniesCard