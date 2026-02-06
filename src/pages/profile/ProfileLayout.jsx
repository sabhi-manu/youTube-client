import React, { useEffect, useState } from 'react'
import ProfileHeader from './ProfileHeader'

import ProfileTabs from './ProfileTabs'
import { Outlet, useParams } from 'react-router'
import { getUserProfileApi } from '../../api/user.api'
import { useSelector } from 'react-redux'

const ProfileLayout = () => {
  const {userId,username}= useParams()
  console.log("profile layout user id ==>",userId,username)
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

 const authUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getUserProfileApi(username);
      console.log("user profile response data ==>",response)
      setProfile(response.data.data);
      setLoading(false);
    };
    fetchProfile();
  }, [userId,authUser?.updatedAt]);

  const isOwner = authUser?._id === profile?._id;

if (loading) return <p>Loading profile...</p>;
  return (
    
  
       <div className='w-full px-3 py-2 h-[calc(100vh-6rem)] overflow-y-scroll overflow-x-hidden '>
         <ProfileHeader profile={profile} setProfile={setProfile} isOwner={isOwner} userId={userId} />
         <ProfileTabs/>
         <Outlet/>
       </div>
    
  )
}

export default ProfileLayout  