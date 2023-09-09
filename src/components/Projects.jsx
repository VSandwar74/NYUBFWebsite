import React from 'react'
import { motion } from 'framer-motion'
import projects from "../assets/projects.json"

export function Card({ name, team, link, description, i }) {

    return (
      <div className="bg-black text-white rounded-3xl text-center flex flex-col h-96 p-6 border border-white justify-between w-full">
        <div className="">
          <h1 className="font-bold text-lg">{name}</h1>
          <h2 className="italic">{team}</h2>
          <p className='text-sm'>{description}</p>
        </div>
        <div className="flex flex-col justify-center w-full items-center">
          {link ? <button className='px-4 p-2 bg-purple-600 rounded-md text-white'><a href={link}>Details</a></button> : <></>}
        </div>
      </div>
    )
  }

const Projects = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-0'>
              <h3 className='uppercase tracking-[5px] md:tracking-[20px] text-white text-2xl'>Projects</h3>
              <div className="w-full grid grid-cols-3 gap-8 px-[5%] grid-flow-row overflow-y-scroll items-center justify-center -mt-12 ml-2 h-[70%]">
                  {projects.projects.map((project, i) => (
                      <Card key={i} className="col-span-1" name={project.name} team={project.team} description={project.description} link={project.link} i={i}/>
                  ))}
              </div>
  {/* //           <NavBar/>
  //           <Signature/>
  //           <Footer/>
  //       </main> */}
        </motion.div>
        )
    }

export default Projects
