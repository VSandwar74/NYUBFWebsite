import React from 'react'

const Home = () => {
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        {/* <BackgroundCircles /> */}
        {/* Do NEXT.JS IMAGe */}
        <img 
            className='relative rounded-full h-64 w-64 mx-auto object-cover'
            src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/new-york-university-logo-kls80-kakanda-lee-setiawan.jpg' 
            alt=''/>
        <div className='flexz-20'>
            <h2 className='top-24 uppercase tracking-[20px] text-white font-bold text-4xl'>Blockchain and Fintech</h2>
            <h2 className='text-md uppercase text-white pb-2 tracking-[5px]'>New York University</h2>
            {/* <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3 '>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1> */}

            <div className='pt-5'>
                {/* <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link> */}
            </div>
        </div>
    </div>
    // <div className="h-screen flex flex-col items-center justify-center text-white">
    //     <h1 className="text-white text-xl">NYU Blockchain and Fintech</h1>
    //     <h4 className="text-white text-xs">New York University's leading club in educating undergraduates in the financial sector, downloade</h4>
    // </div>
  )
}

export default Home