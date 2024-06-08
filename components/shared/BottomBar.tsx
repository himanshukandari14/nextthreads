
"use client"
import React from 'react'
import {sidebarLinks} from '@/constants/index'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname,useRouter } from 'next/navigation'
import { SignOutButton, SignedIn } from '@clerk/nextjs'
import logout from '@/public/assets/logout.svg'
const BottomBar = () => {
    const router= useRouter();
  const pathname=usePathname();
  return (
      <div className='w-full bg-[#131417] h-[10%] fixed  bottom-0 md:flex lg:hidden flex flex-col flex-wrap justify-center items-center gap-12 py-5 px-4'>
      {
        sidebarLinks.map((link)=>{
          const isActive=(pathname.includes(link.route) && link.route.length >1 || pathname === link.route)

          return (
        
          <Link href={link.route} key={link.label} className={`flex ${isActive && 'bg-purple-500 h-[20px] px-2 rounded-xl'}`}>
  <div className="flex justify-center items-center gap-4">
    <Image src={link.imgURL} alt="linkimage" height={12} width={12} />
    <p className="hidden sm:block lg:block">{link.label}</p>
  </div>
</Link>

        
        )
        }
         
      )
      }

      <div>
        <SignedIn>
    
   
   
    
   </SignedIn>
      </div>
    </div>
  )
}

export default BottomBar
