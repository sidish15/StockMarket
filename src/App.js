import React, { useEffect } from 'react'

import StockData from './components/StockData'
import Navbar from './components/Navbar'
import { Route, Routes, useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";



const App = () => {
  const { user,isAuthenticated} = useAuth0();

  const navigate =useNavigate();


useEffect(()=>{
if(isAuthenticated){
navigate("/stockData")
}
},[user,isAuthenticated])


  return (
    <>
     <Navbar/>
 <Routes>
  <Route path="/stockData" element={<StockData />}/>  
   
   </Routes>
   
    
   
    </>
  )
}

export default App
