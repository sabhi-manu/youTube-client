import axios from "axios"

const apiInstance = axios.create({
    baseURL:"https://youtube-backend-qzfq.onrender.com/api",
    withCredentials:true
})

export default apiInstance