import React, { useState } from 'react'
import "./contact.scss"

const Contact = () => {

  const [message,setMessage] = useState(false);

  const handleSubmit =(e) =>{
    console.log("submit")
    e.preventDefault();
    setMessage(true)

  }
  return (
    <div id='contact' className='contact'>
    <div className="left">
      <img src="assest/shake.svg" alt="" />
    
    </div>
    <div className="right">
      <h2>contact</h2>
      <form action="">
        <input type="email" placeholder='Email' />
        <textarea name="" id="" placeholder='message'></textarea>
        <button type='submit' onSubmit={()=>handleSubmit} >Send</button>
        {
          message && <span>Thanks , I'will reply soon:)</span>
        }
      </form>
    </div>

    </div>
  )
}

export default Contact