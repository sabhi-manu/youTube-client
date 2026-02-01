import React from 'react'
import ProfileHeader from './ProfileHeader'

import ProfileTabs from './ProfileTabs'
import { Outlet } from 'react-router'

const ProfileLayout = () => {
  return (
    
  
       <div className='w-full px-3 py-2 h-[calc(100vh-6rem)] overflow-y-scroll overflow-x-hidden '>
         <ProfileHeader/>
         <ProfileTabs/>
         <Outlet/>
       </div>
    
  )
}

export default ProfileLayout  