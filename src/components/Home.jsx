
import { useSelector } from 'react-redux';
import Video from './Video';
import youtubeDummyData from './dummyData.js';

const Home = () => {
  const {user} = useSelector((state)=>state.auth)
  console.log("user data ==>",user)
  console.log(youtubeDummyData)
  return (
    <div className=' flex mt-1 '>
      {/* <SideBar /> */}
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