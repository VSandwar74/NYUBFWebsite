import React from 'react'
import { SocialIcon } from "react-social-icons";


const Footer = () => {
  return (
    <div className="w-full flex flex-row pt-5 px-5 items-center justify-between text-white">
        <div>
            <p>
                Copyright © 2023 NYU Blockchain &amp; Fintech Club
            </p>
        </div>
        <div>
            {/* <SocialIcon 
                url="https://discord.gg/xwEv8qyw"
                fgColor='white'
                bgColor='transparent'
                label='discord'
            /> */}
            <SocialIcon 
                url="https://twitter.com/nyu_bfc"
                fgColor='white'
                bgColor='transparent'
                label='twitter'
            />
            <SocialIcon 
                url="https://www.instagram.com/nyublockchainfintech/"
                fgColor='white'
                bgColor='transparent'
                label='instagram'
            />
        </div>
    </div>
  )
}


export default Footer