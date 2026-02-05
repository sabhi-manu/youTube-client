import React from 'react'
import { Link } from 'react-router'
import Time from '../loader/Time'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import TimeAgo from '../loader/TimeAgo';

const Video = ({ video }) => {
  return (
    <div>
      <Link to={`/video/${video?._id}`}>
        {/* Thumbnail */}
        <div className="relative h-48 md:h-56 rounded-xl hover:rounded-none duration-200 border overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnail}
            alt="thumbnail"
          />
          {video?.duration && <Time time={video?.duration} />}
        </div>

        {/* Title (FULL WIDTH BELOW VIDEO) */}
        <h3 className="mt-3 text-lg font-semibold line-clamp-2">
          {video?.title}
        </h3>

        {/* Channel info row */}
        <div className="flex mt-2 space-x-2">
          {/* Avatar */}
          <div className="h-9 w-9 rounded-full overflow-hidden border shrink-0">
            <img
              src={video?.owner?.avatar}
              alt="userAvatar"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Meta info */}
          <div className="text-[12px] text-gray-600">
            <div className="flex items-center font-semibold">
              {video?.owner?.fullName}
              {video?.isPublished && (
                <BsFillCheckCircleFill className="ml-1 text-[12px]" />
              )}
            </div>

            <div className="flex items-center text-gray-500">
              <span>{abbreviateNumber(video?.views, 2)} views</span>
              <span className="mx-1">•</span>
              <TimeAgo date={video?.createdAt} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};


export default Video
