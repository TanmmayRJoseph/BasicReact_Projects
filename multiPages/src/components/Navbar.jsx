import React from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="div">
        <nav>
          <NavLink className={(e)=>{return e.isActive?"red" :""}} to={"/"}><li>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red" :""}} to={"/contact"}><li>Contact</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red" :""}} to={"/about"}><li>About</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red" :""}} to={"/user"}><li>User</li></NavLink>
        </nav>
    </div>
    </>
    
  )
}

export default Navbar