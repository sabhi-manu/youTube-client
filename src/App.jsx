import Home from './components/Home'
import NavBar from './components/NavBar'
import PlayingVideo from './components/PlayingVideo'
import Search from './components/Search'
import {Route, Routes} from "react-router"


const App = () => {

  return (
  
  <div>
    <NavBar />

<Routes>
  <Route  path='/' element={<Home/>} />
  <Route path='/search/:searchQuery' element={<Search/>} />
  <Route path='/video/:id' element={<PlayingVideo/>} />
</Routes>
  </div>

      
      
  )
}

export default App