import axiosInstance from "../axios"

export const getCommentApi = (videoId)=>{
    return axiosInstance.get(`/comment/${videoId}`)
}
export const createCommentApi = (videoId,content)=>{
    return axiosInstance.post(`/comment/${videoId}`,{content})
}

export const toggleVideoLikeApi = (videoId)=>{
    return axiosInstance.post(`/like/toggle/v/${videoId}`)
}