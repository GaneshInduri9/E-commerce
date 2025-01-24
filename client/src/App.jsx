import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default App
