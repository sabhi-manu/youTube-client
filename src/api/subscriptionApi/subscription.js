import axiosInstance from "../axios"

export const subscriptionToggleApi = (channelId)=>{
    console.log("channel id ==>",channelId)
    return axiosInstance.post(`/subscriptions/c/${channelId}`)
}
export const getSubscribedChannelsApi = (subscriberId)=>{
    console.log("channel id ==>",subscriberId)
    return axiosInstance.get(`/subscriptions/u/${subscriberId}`)
}

