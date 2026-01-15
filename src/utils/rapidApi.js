import axios from "axios"

const baseUrl = "https://youtube138.p.rapidapi.com"
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b2505d94c6msh4c5d4364d546383p127b7fjsnf6d86b01d9ef',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com',
		
	}
};

export const fetchData = async(url,params = {})=>{
    try {
        const {data} = await axios.get(`${baseUrl}/${url}`,{  ...options,
      params,})
        return data
    } catch (error) {
        console.log("error fetching api data.===>",error)
         throw error;
    }
}