import React from 'react';
import queryString from 'query-string';
import "./Whatsapp.css"

const WhatsAppButton = () => {
  const handleSendMessage = () => {
    const message = 'Hello, this is a test message!'; // Replace with your actual message
    const phoneNumber = '7987438689'; // Replace with the recipient's phone number
    const url = `https://wa.me/${phoneNumber}?${queryString.stringify({ text: message })}`;
    window.open(url);
  };

  return (
        <div className="wdiv">
                 <button className="wbutton" onClick={handleSendMessage} >
      Send Message via WhatsApp
    </button>
        </div>
   
  );
};

export default WhatsAppButton;
