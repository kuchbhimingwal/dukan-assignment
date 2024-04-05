import React from 'react'
import imgSrc from "../assets/image.png"
import NavItemComp from './NavItemComp'
import {navItems} from '../assets/navItems'

function NavBar({
  companyName,
}) {
  console.log(navItems);
  return (
    <div className='bg-navColor text-white h-screen w-1/5 fixed'>
      <div className="flex justify-between p-4">
        <div className='flex'>
          <img src={imgSrc} alt="company icon" className='w-10 h-auto'/>
          <div className='ml-4'>
            {companyName}<br/>
            <span className='underline font-thin'>visit store</span>
          </div>
        </div>
        <div className='pt-5'>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.846847 1.22185C1.26727 0.801426 1.92516 0.763206 2.38876 1.10719L2.52157 1.22185L8 6.69974L13.4784 1.22185C13.8988 0.801426 14.5567 0.763206 15.0203 1.10719L15.1532 1.22185C15.5736 1.64227 15.6118 2.30016 15.2678 2.76376L15.1532 2.89657L8.83736 9.21236C8.41694 9.63278 7.75905 9.671 7.29545 9.32702L7.16264 9.21236L0.846847 2.89657C0.384384 2.43411 0.384384 1.68431 0.846847 1.22185Z" fill="white"/>
            </svg>
        </div>

      </div>
      <div className='px-2 opacity-80'>
        {navItems.map((item)=>(
          <NavItemComp svg={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  )
}

export default NavBar