

const TimeAgo = ({ date }) => {
    const seconds = Math.floor(
        (new Date() - new Date(date)) / 1000
    );
    // console.log("check the time data ==>",seconds)
    
  let timeText = "Just now";

  if (seconds < 60) {
    timeText = "Just now";
  } else if (seconds < 3600) {
    timeText = `${Math.floor(seconds / 60)} min ago`;
  } else if (seconds < 86400) {
    timeText = `${Math.floor(seconds / 3600)} hr ago`;
  } else {
    timeText = `${Math.floor(seconds / 86400)} days ago`;
  }

  return timeText
};

export default TimeAgo;
