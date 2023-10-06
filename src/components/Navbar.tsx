import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar =() =>{
    return (
        <div className={classes.navbar}>
            <div className={classes.menubar}>
                <p>LOGO</p>
            </div>
            <div className={classes.menubar}>
                <p>Profile</p>
                <NavLink className={classes.login} to="">Login</NavLink>
            </div>
        </div>
    )
}

export default Navbar