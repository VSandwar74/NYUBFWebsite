import React from 'react'
import { motion } from "framer-motion";

const Company = ({ directionLeft, source, status, name }) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={source}
            className='rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out bg-white'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-base md:text-3xl font-bold text-black opacity-100 flex flex-col items-center'>
                    {/* {status ? "Alumni" : "Partner"} */}
                    {name}
                    {/* <span className='text-sm md:text-xl font-normal text-gray-500' >{name}</span> */}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Company