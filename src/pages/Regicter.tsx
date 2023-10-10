import {  FormEvent ,useState } from 'react'
import classes from './Register.module.css'
import useRegister from '../Hooks/useRegister'
import { useNavigate } from 'react-router'

const Register = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [RRpassword, setRRPassword] = useState<string>('')
  const {RegisterPost} = useRegister()

  const handleSubmit = async (e :FormEvent) => {
    e.preventDefault()
   try {await (password === RRpassword)?
        (RegisterPost (username,name,password),navigate('/login')):
        (alert("Invalid password"),
        setPassword(''),setRRPassword(''),setUsername(''))
        
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form className={classes.loginForm} onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text" placeholder="Username"
    
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />
      <label>Name</label>
      <input
        type="text" placeholder="Name"
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <label>Password</label>
      <input
        type="Password" placeholder="Enter Password"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
       <label>Repeat Password</label>
      <input
        type="Password" placeholder="Repeat Password"
        onChange={(e) => {
          setRRPassword(e.target.value)
        }}
      />
        <button type="submit">
            Register
        </button>
    </form>
  )
}

export default Register
