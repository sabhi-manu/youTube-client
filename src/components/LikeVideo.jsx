import React, { useEffect, useState } from 'react'
import { getLikeVideoApi } from '../api/videoApi/getVideosApi'
import SearchVideoSkeleton from '../skeletons/SearchVideoSkeleton'

const LikeVideo = () => {
    const [videos,setVideos] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchLikeVideo = async ()=>{

           try {
             const response = await getLikeVideoApi()
             console.log("check the response of like api ==>",response)
             setVideos(response.data.data)
 
           } catch (error) {
            console.log("fail to get like videos.")
           }finally{
            setLoading(false);
           }
        }
        fetchLikeVideo()
    },[])

     if (loading) {
    return <p className="text-center mt-10">
      {
        Array(10).fill(0).map((_,index) => <SearchVideoSkeleton key={index}/>)
      }
    </p>;
  }

     if (!videos.length) {
    return <p className="text-center mt-10 text-gray-500">No Like videos found...</p>;
  }
  return (
     <div className="max-w-5xl mx-auto p-4 space-y-6">
        <h1 className=' text-center text-lg underline  '>Your Like Videos</h1>
      {videos.map((video) => (
        <div
          key={video._id}
          className="flex gap-4 border-b pb-4"
        >
          {/* Left: Thumbnail */}
          <div className="w-64 flex-shrink-0">
            <img
              src={video?.videos.thumbnail}
              alt={video?.videos.title}
              className="w-full h-36 object-cover rounded"
            />
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold line-clamp-2">
                {video?.videos.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {video?.videos.description}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <img
                  src={video?.videos.owner.avatar}
                  alt={video?.videos.owner.fullName}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-700">
                  {video?.videos.owner.fullName}
                </span>
              </div>
            </div>

            <div className="text-xs text-gray-500 mt-2">
              {video?.videos.views} views • {Math.floor(video?.videos.duration)} sec
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LikeVideo