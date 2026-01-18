import React from 'react'
import SideBar from './SideBar'
import { useAuth } from '../context/AuthProvider.jsx'
import Video from './Video';
import youtubeDummyData from './dummyData.js';

const Home = () => {
  // const {data} = useAuth()
  console.log(youtubeDummyData)
  return (
    <div className=' flex mt-15 '>
      <SideBar />
      <div className='h-[calc(100vh-6rem)] overflow-y-scroll overflow-x-hidden'>
        <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-3  p-5 '>
          {
            youtubeDummyData?.map((item) => {
              if (item.type !== "video") return false

              return (

                <Video key={item.videoId} video={item} />
              )

            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home