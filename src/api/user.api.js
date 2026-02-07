import axiosInstance from "./axios"

export const updateProfileApi = (data)=>{
    console.log("update profile details ==>",data)
    return axiosInstance.patch("/user/details/profile",data)
}
export const changePasswordApi = (data)=>{
    console.log("change PasswordApi details ==>",data)
    return axiosInstance.post("/user/details/password",data)
}
export const updateAvatarApi = (data)=>{
    console.log("update AvatarApi details ==>",data)
    return axiosInstance.patch("/user/details/avatar",data)
}
export const updateCoverImageApi = (data)=>{
    console.log("update cover image details ==>",data)
    return axiosInstance.patch("/user/details/coverimage",data)
}
export const getUserProfileApi = (username)=>{
    console.log("update cover image details ==>",username)
    return axiosInstance.get(`/user/channel_profile/${username}`)
}

export const watchHistoryApi = ()=>{
    return axiosInstance.get("/user/history")
}