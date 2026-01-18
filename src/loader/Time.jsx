import React from 'react'
import moment from "moment"

const Time = ({time}) => {
    console.log("this is time ==>",time)
  return (
    <div>
         <span  className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs rounded-md">
        {moment.utc(time * 1000).format("mm:ss")}
      </span>
    </div>
  )
}

export default Time