import axiosInstance from "../axios"

export const getUserPlayListApi = (userId)=>{
    console.log('check the user id ===',userId)
    return axiosInstance.get(`/playlist/user/${userId}`)
}