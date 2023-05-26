import React from 'react'
import "./ContactUs.css"
import emailjs from "emailjs-com"

const ContactUs = () => {
const sendEmail=(e)=>{
e.preventDefault();

emailjs.sendForm(
  "service_xzm1ghj",
  "template_gy3w69e",
  e.target,
  "qsrZ28ezcfE4-kqBH"
  ).then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  }
  )
}

  return (
    <div className="container pt-5 mt-5">
    <h1 className="title text-center text-dark">Send Email</h1>
    <div className="row">
      
      <div className="col-md-12 text-light">
        <form className="contact-section" onSubmit={sendEmail}>
          
          <input type="text" placeholder="Name" name='name'/>
          <input type="email" placeholder="E-mail" name='email'/>
          <textarea placeholder="Write your message..." name='message'></textarea>
          <input type="submit" value="Send"/>
          
         
        </form>
      </div>
    </div>
    
  </div>
  )
}

export default ContactUs
