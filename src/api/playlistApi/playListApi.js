import axiosInstance from "../axios"

export const getUserPlayListApi = (userId)=>{
    console.log('check the user id ===',userId)
    return axiosInstance.get(`/playlist/user/${userId}`)
}
export const getPlayListByIdApi = (playlistId)=>{
    console.log('check the user id ===',playlistId)
    return axiosInstance.get(`/playlist/${playlistId}`)
    
}