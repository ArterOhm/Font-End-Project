import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useState } from 'react'


const Navbar =() =>{
  const[menuOpen ,setMenuOpen] =useState<boolean>(false)
  
    return (
        <nav className={classes.navbar}>
            <div className={classes.menubarL}>
            <NavLink className={ classes.inactive} to="/">
              LOGO
            </NavLink>
            </div>
            <div  className={classes.menubarHam } onClick={()=>{return (setMenuOpen(!menuOpen) ,console.log(menuOpen))}} >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={menuOpen? classes.menubarR:  classes.menubarOpen}>
            <NavLink className={classes.HomeMeun}  to="/">
              Home
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create" >
              Create
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile" >
              Profile
            </NavLink>
            <NavLink className={classes.login} to="/login"  >Login</NavLink >
            </div>
        </nav>
    )
}

export default Navbar