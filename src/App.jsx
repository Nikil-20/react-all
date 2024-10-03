import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import StateComponents from './components/StateComponents'
import About from './components/About'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/state" element={<StateComponents />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login/>}/>
  
      </Routes>
    </Router>



    </>
   )
  
}

export default App

        {/* <div className='flex  '>


    <Home img="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724284800&semt=ais_hybrid" name= "ANDY "></Home>
    <Home img="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671159.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid" name= "SANDY "></Home>
    <Home img="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724284800&semt=ais_hybrid" name= "ROY "></Home>
    <Home img="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg" name="JOHNNY"></Home>
    <Home img="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671124.jpg" name= "RAM " ></Home>
    <Home img="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671155.jpg" name= "SUNNY "></Home>
    

    </div>
    <LoginPage />
    </>
  ) */}