'use client'
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export default function NavItem() {
  const[mobileMenu, setMobileMenu]=useState(false)
  return (
    <nav>
        <ul className="hidden md:flex justify-center items-center gap-3">
            <Link className="nav-link hover:text-primary" href={'/'}>Home</Link>  
            <Link className="nav-link hover:text-primary" href={'/about'}>About us</Link>  
            <Link className="nav-link hover:text-primary" href={'/services'}>Services</Link>  
            <Link className="nav-link hover:text-primary" href={'/projects'}>Projects</Link>  
        </ul>
        <div className="block md:hidden relative">
          {mobileMenu ? <RxCross2 size={25} className="text-white cursor-pointer" onClick={()=>setMobileMenu(false)}/> :  <RiMenu3Fill size={25} className="text-white cursor-pointer" onClick={()=>setMobileMenu(true)}/>}     
        </div>
        <div className="absolute top-12 left-20">
        {mobileMenu ?  <div className="bg-[#343434] border w-[200px] p-5">
          <ul className="flex justify-start flex-col gap-4">
            <a className="text-sm font-semibold text-white hover:text-primary" href={'/'}>Home</a>  
            <a className="text-sm font-semibold text-white hover:text-primary" href={'/about'}>About us</a>  
            <a className="text-sm font-semibold text-white hover:text-primary" href={'/services'}>Services</a>  
            <a className="text-sm font-semibold text-white hover:text-primary" href={'/projects'}>Projects</a>  
        </ul>
        </div>
           : null}
        </div>
    </nav>
  )
}
