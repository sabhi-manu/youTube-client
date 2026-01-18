import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";

const SideBar = () => {

    const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <PiUserSquareThin />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlineSubscriptions />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <AiOutlineLike />,
    },
  ];

    const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <IoGameControllerOutline />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <SiStylelint />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <PiLightbulbLight />,
    },
    {
      id: 11,
      name: "Padcasts",
      icon: <MdPodcasts />,
    },
  ];
  const sidebarItems4 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    },
  ];

  return (
    <div className="w-64 h-[calc(100vh-6rem)] overflow-y-scroll overflow-x-hidden  px-2 py-4  ">
      {/* home part */}
      {sidebarItems.map((item)=>{
        return  <div key={item.id} className="flex items-center gap-4 px-4 py-2 rounded-xl hover:bg-gray-300 cursor-pointer transition duration-200">
        
        <div className=''>{item.icon} </div>
        <span className="text-sm font-medium">{item.name}</span>
      </div>
      })}
     <hr className='mt-2' />
   {/* you part */}
          <div className='font-bold mt-2 mb-1  ml-2 '>You</div>
          {sidebarItems2.map((item)=>{
        return  <div key={item.id} className="flex items-center gap-4 px-4 py-2 rounded-xl hover:bg-gray-300 cursor-pointer transition duration-200">
        
        <div className=''>{item.icon} </div>
        <span className="text-sm font-medium">{item.name}</span>
      </div>
      })}
      <hr className='mt-2' />
   {/* explor part */}
          <div className='font-bold mt-2 mb-1  ml-2 '>Explor</div>
          {sidebarItems3.map((item)=>{
        return  <div key={item.id} className="flex items-center gap-4 px-4 py-2 rounded-xl hover:bg-gray-300 cursor-pointer transition duration-200">
        
        <div className=''>{item.icon} </div>
        <span className="text-sm font-medium">{item.name}</span>
      </div>
      })}
   <hr className='mt-2' />
   {/* you part */}
          <div className='font-bold mt-2 mb-1 ml-2'>More From YouTub</div>
          {sidebarItems4.map((item)=>{
        return  <div key={item.id} className="flex items-center gap-4 px-4 py-2 rounded-xl hover:bg-gray-300 cursor-pointer transition duration-200">
        
        <div>{item.icon} </div>
        <span className="text-sm font-medium">{item.name}</span>
        
      </div>
      
      })}
       <hr className='mt-3' />

      <br />
       <span  className="text-xs text-gray-600 font-semibold">
        About Press Copyright <br /> Contact us Creators <br /> Advertise
        Developers <br />
        <p className="mt-3">Terms Privacy Policy & Safety</p> How YouTube works{" "}
        <br /> Test new features
      </span>
      <br />
      <p className="text-xs text-gray-500 mt-3">© 2026 Learn Coding</p>
    
     
    </div>
  )
}

export default SideBar