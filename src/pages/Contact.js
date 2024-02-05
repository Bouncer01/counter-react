import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const navigate = useNavigate()
  return (
    <div>
         <h1>Contact Page</h1>
         <button className='btn btn-primary' onClick={()=>navigate('/')}>Go To Home Page</button>
    </div>
  )
}

export default Contact