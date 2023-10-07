import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar =() =>{
    return (
        <div className={classes.navbar}>
            <div className={classes.menubar}>
                <p>LOGO</p>
            </div>
            <div className={classes.menubar}>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
              Profile
            </NavLink>
            <NavLink className={classes.login} to="">Login</NavLink>
            </div>
        </div>
    )
}

export default Navbar