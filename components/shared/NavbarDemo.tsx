import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import logout from '@/public/assets/logout.svg'

const NavbarDemo = () => {
  return (
  <div className="navbar bg-[#131417] fixed">
  <div className="navbar-start">
 
    <a className="btn btn-ghost text-xl">Reepo</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
   <SignedIn>
    
    <div className='hidden md:block lg:block'>
      <SignOutButton />
    </div>
    
    <Image className='sm:block md:hidden' src={logout} alt="logout" height={28} width={28}></Image>
    <OrganizationSwitcher
    appearance={{
      elements:{
        organizationSwitcherTrigger:"px-8 text-white"
      }
    }} />
   </SignedIn>
  </div>
</div>
  )
}

export default NavbarDemo
