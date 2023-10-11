import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useState } from 'react'
import { useAuth } from '../provifers/AuthProvider'


const Navbar =() =>{
  const[menuOpen ,setMenuOpen] =useState<boolean>(true)
  const {isLoggedIn, logout } = useAuth()
  
    return (
        <nav className={classes.navbar}>
            <div className={classes.menubarL}>
            <NavLink className={ classes.inactive} to="/">
              LOGO
            </NavLink>
            </div>
            <div  className={classes.menubarHam } onClick={()=>setMenuOpen(!menuOpen) } >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={menuOpen? classes.menubarR:  classes.menubarOpen}>
          
            {isLoggedIn ? (<> 
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)}  to="/" >
              Home
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create" >
              Create
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile" >
              Profile
            </NavLink>
            <NavLink className={classes.login} onClick={logout} to="/">
              Logout
            </NavLink>
            </>) : (
            <NavLink className={classes.login} to="/Login">
            Login
            </NavLink>
           )}
            </div>
           
        </nav>
    )
}

export default Navbar