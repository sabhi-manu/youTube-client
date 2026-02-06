import axiosInstance from "../axios"

export const getUserTweetsApi = (userId)=>{
    console.log('check the user id ==>',userId)
    return axiosInstance.get(`/tweet/${userId}`)
}


// api/tweetsApi/tweetsApi.js
export const createTweetApi = (data) => {
  return axiosInstance.post("/tweet", data);
};
