import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
         <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  <button className='btn btn-success p-2'>Bouncer's Hub</button>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link to='/' class="nav-link active m-3" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          < Link to='about' a class="nav-link  m-3">About</Link>
        </li>
        <li class="nav-item">
          <Link to='services' a class="nav-link  m-3">Services</Link>
        </li>
        <li class="nav-item">
          < Link to='contact' a class="nav-link  m-3">Contact</Link>
        </li>
        <li class="nav-item">
          <Link to='blog/bouncer' a class="nav-link  m-3">Blog</Link>
        </li>
         </ul>
      <button className='btn btn-success p-2'>Login</button>
    </div>
  </div>
         </nav>
    </div>
  )
}

export default Navbar