import axiosInstance from "../axios"

export const getUserTweetsApi = (userId)=>{
    console.log('check the user id ==>',userId)
    return axiosInstance.get(`/tweet/${userId}`)
}


export const createTweetApi = (data) => {
  return axiosInstance.post("/tweet", data);
};

export const tweetToggleApi = (tweetId)=>{
  return axiosInstance.post(`/like/toggle/t/${tweetId}`)
}