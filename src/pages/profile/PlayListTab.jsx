import React from 'react'
import SideBar from '../../components/SideBar'
import SuggestedVideo from '../../components/SuggestedVideo'

export const playlistsMock =
{
    _id: "playlist_1",
    name: "React Roadmap 2025",
    description: "Complete React roadmap from basics to advanced concepts.",
    createdAt: "2025-01-10T10:00:00Z",
    updatedAt: "2025-01-15T12:30:00Z",
    owner: "user_123",
    videos: [
        {
            _id: "video_1",
            videoId: "d4e5f6",
            title: "Redux Toolkit Crash Course",
            thumbnails: [{ url: "https://picsum.photos/300/200?random=3" }],
            lengthSeconds: 1800,
            author: {
                title: "JS Mastery",
                badges: [{ type: "VERIFIED_CHANNEL" }],
            },
            stats: { views: 720000 },
            publishedTimeText: "3 weeks ago",
        },
        {
            videoId: "d4e5f6",
            title: "Redux Toolkit Crash Course",
            thumbnails: [{ url: "https://picsum.photos/300/200?random=2" }],
            lengthSeconds: 1800,
            author: {
                title: "JS Mastery",
                badges: [{ type: "VERIFIED_CHANNEL" }],
            },
            stats: { views: 720000 },
            publishedTimeText: "3 weeks ago",
        },
    ],
}





const PlayListTab = () => {
    return (
    
          
            <div className='mt-4 ml-4 flex gap-5 flex-wrap'>
                <div className='w-[500px] '>
                    <div className='relative'>
                        <img className='h-full w-full object-cover ' src={playlistsMock.videos[0].thumbnails[0].url} alt="playlist image" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-black/70 text-white text-xs px-3 py-2 rounded-lg">
                            <span className="uppercase tracking-wide">Playlist</span>
                            <span>{playlistsMock.videos.length} videos</span>
                        </div>
                    </div>
                    <div>
                        <h2>{playlistsMock.name} </h2>
                        <p>{playlistsMock.description} </p>
                    </div>
                </div>
                <div>
                    {
                        playlistsMock.videos.map((video)=>(
                            <SuggestedVideo key={video._id} video={video} />
                        ))
                    }
                </div>
            </div>

    )
}

export default PlayListTab