import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidApi";


export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [value, setValue] = useState("New")

    const fetchAllData = async(query) => {
        setLoading(true)
        try {
    const res = await fetchData("search", {
      q: query,
      hl: "en",
      gl: "US",
    });
        // console.log("API RESPONSE ===>", res.contents); 
    setData(res.contents);
    setLoading(false)
  } catch (err) {
    console.error("Failed to fetch data");
  }
    }
    useEffect(() => {
        fetchAllData(value)
    }, [value])
    return (
        <AuthContext.Provider value={{ data, setValue, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)