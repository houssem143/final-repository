import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <span>
        <Link to="/" className='link' id="logo" >GreenAgriShop</Link>    
        </span>
        <div className='links' >
         <Link to='/'  className='link'>Home</Link>
         <Link to='/About'  className='link'>About</Link>
        <Link to='/Signin' className='link' >Sign in</Link>
        <Link to='/Signup' className='link' >Sign up</Link>
        </div>

        
        
    </div>
  )
}

export default Navbar