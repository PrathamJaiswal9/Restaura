import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { LINKS } from '../constants';
import { FaBars, FaTimeline } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const toggleMobile = () => {
        setIsMobileOpen(!isMobileOpen);
    }

    const handleScroll = (event, targetId) => {
        event.preventDefault();

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80
            window.scrollTo({
                top : offsetTop ,
                behavior : "smooth"
            })
        }
           setIsMobileOpen(false) 
    }

  return (
    <nav className='fixed top-4 z-50 flex w-full flex-col items-center justify-center'>
        <div className='flex w-full items-center justify-between overflow-y-hidden
        p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg'>
            
            <img className='cursor-pointer hover:scale-110 transition duration-300' 
            src={logo} alt="Logo" width={90} height={30} />

            <div className='hidden space-x-6 lg:flex '>
                {
                    LINKS.map((link , index)=> (
                        <a className={`text-sm ${index !== 0 ? "border-1-2  border-neutral-300/20 pl-2": ""}
                            hover:opacity-50 hover:scale-110 transition duration-300`} onClick={(e)=> handleScroll(e, link.targetId)} 
                        key={index} href={`#${link.targetId}`}>
                            {link.text}
                        </a>
                    ))
                }
            </div>

            <div className='lg:hidden'>
                <button onClick={toggleMobile} 
                className=''
                >{isMobileOpen ? <FaTimes/> : <FaBars/>}</button>
            </div>
        </div>
        {isMobileOpen && (
            <div className='w-full backdrop-blur-lg lg:hidden'>
                {LINKS.map((link, index)=> (
                    <a key={index} href={`#${link.targetId}`} 
                    className='block p-4 uppercase tracking-tighter'
                    onClick={(e)=> handleScroll(e, link.targetId)}
                    >
                        {link.text}
                    </a>
                ))}
            </div>
        )}
    </nav>
  )
}

export default Navbar
