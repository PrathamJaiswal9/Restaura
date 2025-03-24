import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'

const Footer = () => {
  return (
    <footer className='mb-8 mt-20'>
       <div className='flex items-center justify-center gap-8'>
            {SOCIAL_MEDIA_LINKS.map((link, index)=> (
              <a className='cursor-pointer hover:scale-110 transition duration-300' 
              key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
                  {link.icon}
              </a>
            ))}
       </div>
       
       <p className='mt-8 text-center tracking-tighter text-neutral-500 
       text-lg'>
            &copy;PrathamJaiswal. All rights reserved. 
       </p>
    </footer>
  )
}

export default Footer
