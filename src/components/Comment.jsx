
import { BsFillCheckCircleFill } from "react-icons/bs";
import TimeAgo from "../loader/TimeAgo";



const Comment = ({comment,videoId}) => {
  console.log("comment data ==>",comment,videoId)
 

  

  return (
      <div className="flex gap-3 mt-4">
      <img
        src={comment?.owner.avatar}
        className="w-9 h-9 rounded-full"
        alt="user"
      />

      <div>
        <div className="flex items-center gap-1 text-sm font-semibold">
          {comment.owner.fullName}
          <span className="text-xs text-gray-400 ml-2">
            <TimeAgo date={comment?.createdAt} />
          </span>
        </div>

        <p className="text-sm mt-1">{comment?.content}</p>
      </div>
    </div>
  );
};

export default Comment;
