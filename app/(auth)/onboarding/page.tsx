import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import AccountProfile from '@/components/forms/AccountProfile';
const page = async () => {

  const user= await currentUser();

  const userInfo={};

  const userData={
    id:user?.id,
    objectId:userInfo?.id,
    username:userInfo?.username || user?.username,
    name:userInfo?.name || user?.firstName,
    bio:userInfo?.bio || "bio here",
    image:userInfo?.image || user?.imageUrl,
  }
  return (
    <main className='mx-auto flex flex-col px-10 py-20'>
     <h1>OnBoarding</h1>
     <p>Complete your profile</p>

     <section className='mt-9 bg-[#2C2C30] p-10'>
      <AccountProfile user={userData} btnTitle="continue" />
     </section>
    </main>
  )
}

export default page
