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
export const uploadVideoApi = (data)=>{
    console.log("check the user id in api ==>",data)
    return axiosInstance.post(`/video/`,data)
}
export const toggleVideoPublishApi = (videoId)=>{
    console.log("check the user id in api ==>",videoId)
    return axiosInstance.patch(`/video/toggle/publish/${videoId}`)
}
export const deleteVideoApi = (videoId)=>{
    console.log("check the user id in api ==>",videoId)
    return axiosInstance.delete(`/video/${videoId}`)
}

export const getLikeVideoApi = ()=>{
    return axiosInstance.post("/like/videos")
}