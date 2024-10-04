import React from 'react';
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import State1 from './components/State1'
import State2 from './components/State2'
import Apifetch from './components/Apifetch'
import Product from './components/Product'
import Form from './components/Forms'
import About from './components/About'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/state1" element={<State1 />} />
        <Route path="/state2" element={<State2 />} />
        <Route path="/apifetch" element={<Apifetch />} />
        <Route path="/product" element={<Product />} />
        <Route path="/form" element={<Form />} />
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