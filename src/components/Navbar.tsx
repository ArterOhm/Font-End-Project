import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar =() =>{
    return (
        <div className={classes.navbar}>
            <div className={classes.menubar}>
            <NavLink className={ classes.inactive} to="/">
              LOGO
            </NavLink>
            </div>
            <div className={classes.menubar}>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create">
              Create
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
              Profile
            </NavLink>
            <NavLink className={classes.login} to="/login">Login</NavLink>
            </div>
        </div>
    )
}

export default Navbar