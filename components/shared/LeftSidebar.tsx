"use client"
import React from 'react'
import { sidebarLinks } from '@/constants/index'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { SignOutButton, SignedIn } from '@clerk/nextjs'
import logout from '@/public/assets/logout.svg'

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className='w-[15%] bg-[#131417] h-full fixed top-0 left-0 hidden md:flex lg:flex flex-col flex-wrap justify-start gap-12 py-5 px-4 mt-[68px]'>
      {
        sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1 || pathname === link.route)

          return (
            <Link href={link.route} key={link.label} className={`flex ${isActive && 'bg-purple-500 h-[50px] px-2 rounded-xl'}`}>
              <div className="flex justify-center items-center gap-4">
                <Image src={link.imgURL} alt="linkimage" height={28} width={28} />
                <p className="hidden sm:block lg:block">{link.label}</p>
              </div>
            </Link>
          )
        })
      }

      <div>
        <SignedIn>
          <div className='hidden md:flex lg:flex gap-4'>
            <Image className='sm:block md:block' src={logout} alt="logout" height={28} width={28} />
            <SignOutButton redirectUrl='/sign-in' />
          </div>
          <Image className='sm:block md:hidden' src={logout} alt="logout" height={28} width={28} />
        </SignedIn>
      </div>
    </div>
  )
}

export default LeftSidebar
