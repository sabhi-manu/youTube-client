import React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { useAuth } from "./context/AuthProvider";


const App = () => {

  const {data,loading} = useAuth()
  console.log("loading ==>",loading)
  console.log("api data ==>",data)
  return (
  
  <div>
    <NavBar />

<SideBar />
  </div>

      
      
  )
}

export default App