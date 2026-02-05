import axiosInstance from "../axios"

export const getAllVideoApi = async ()=>{
    return axiosInstance.get("/video")
}

export const getVideoById = (videoId)=>{
    return axiosInstance.get(`/video/${videoId}`)
}