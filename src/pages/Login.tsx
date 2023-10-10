import { FormEvent, useState } from 'react'
import classes from './Login.module.css'
import { useAuth } from '../provifers/AuthProvider'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await login(username, password)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form className={classes.loginForm} onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text" placeholder='Username'
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />

      <label>Password:</label>
      <input
        type="Password" placeholder ='Password'
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <NavLink className={classes.Register}  to="/Register">Register</NavLink>
        <button type="submit">
          submit
        </button>
    </form>
  )
}

export default Login
