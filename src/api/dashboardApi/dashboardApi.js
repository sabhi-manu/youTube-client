import axiosInstance from "../axios"

export const userAccountDetailsApi = (channelId)=>{
    return axiosInstance.get(`/dashboard/stats/${channelId}`)

} 
export const userAccountVideosApi = (channelId)=>{
    return axiosInstance.get(`/dashboard/videos/${channelId}`)

} 