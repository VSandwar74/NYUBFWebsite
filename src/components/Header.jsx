import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 p-5 px-24 flex items-start justify-between w-full z-20 xl:items-center">
        <div className="flex flex-row justify-between w-full">
            <div className="text-white">
                NYU BNF
            </div>
            <div className="text-white">
                <a className="p-2">Home</a>
                <a className="p-2">Our Team</a>
                <a className="p-2">NFT Gallery</a>
            </div>
        </div>
    </header>
  )
}

export default Header