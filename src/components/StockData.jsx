import React, { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ContactUs from './ContactUs';
import "./StockData.css"
import WhatsAppButton from './WhatsApp';

// import UserData from './UserData';
const StockData = () => {
  const [data,setData]=useState([]);

  let isLoading=true; 

  let API="https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-05-15/2023-05-15?apiKey=EZUEpXcELImbvLb5dLokAVb4MpHEVJCG"
  const { user,isAuthenticated} = useAuth0();


const fetchApiData= async(url)=>{
try{
const res=await fetch(url);
setData(await res.json());
console.log(data);
isLoading=false;
// const result=data.results
// console.log(result);
}catch(err){
console.log(err)
}
}
useEffect(()=>{
  console.log("useEffect called")

fetchApiData(API);
},[])
 
// if(isLoading){
//   return <h2>Loading....</h2>
// }

// useEffect(()=>{
  
// console.log(user)
// console.log(isAuthenticated)
// },[user,isAuthenticated])

  return (
  <>
    
   
   
   {/* {isAuthenticated && <h2>Stock Price iss </h2>} */}
   
   {!data ? (
    <p>No data</p>
   ):(
    <>

    <div className='box'>
      <div className="info">
      <p>Stock Ticker Symbol : {data.ticker}</p> 
      {/* <p>Stock Ticker Symbol  is {data.ticker}</p> 
      <p>Stock Ticker Symbol is {data.ticker}</p> 
      <p>Stock Ticker Symbol  is {data.ticker}</p> 
      <p>Stock Ticker Symbol  is {data.ticker}</p> 
      <p>Stock Ticker Symbol  is {data.ticker}</p> 
      <p>Stock Ticker Symbol  is {data.ticker}</p> 
      <p>Stock Ticker Symbol  is {data.ticker}</p>  */}
      </div>
     
      </div>
   
   
    
   
    </>
   )
   }
   <ContactUs/>
   <br />
   <WhatsAppButton/>

   
    </>
  )
}

export default StockData

