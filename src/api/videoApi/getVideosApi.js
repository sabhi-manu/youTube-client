import axiosInstance from "../axios"

export const getAllVideoApi = async ()=>{
    return axiosInstance.get("/video")
}

export const getVideoById = (videoId)=>{
    return axiosInstance.get(`/video/${videoId}`)
}

export const getUserVideo = (userId)=>{
    console.log("check the user id in api ==>",userId)
    return axiosInstance.get(`/video/user/${userId}`)
}
