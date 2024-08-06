import React, { useContext, useEffect } from 'react'
import "./App.css"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import About from "./pages/About"
import Appointment from "./pages/Appointment"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import NavBar from './components/NavBar'
import { Context } from './main'
import axios from 'axios'


const App = () => {
  const {isAuthenticated,setIsAuthenticated,setUser}=useContext(Context)
  useEffect(()=>{
    const fetchUSer=async()=>{
      try {
       const response=await axios.get("http://localhost:5677/api/v1/user/patient/me",{withCredentials:true});
       setIsAuthenticated(true);
       setUser(response.data.user)

        
      } catch (error) {
        setIsAuthenticated(false)
        setUser({})
        
      }
    };
    fetchUSer();
  },[isAuthenticated])
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
      <ToastContainer position='top-center'/>
      
    </Router>
    </>
  )
}

export default App