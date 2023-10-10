
import axios from 'axios'
import {  RegisterDTO } from '../types/dto'

const useRegister = () => {
    const RegisterPost = async (username: string, name :string, password: string) => {
        const RegisterBody: RegisterDTO = { username, name, password }
      try {await axios.post<RegisterDTO>(`https://api.learnhub.thanayut.in.th/user`,RegisterBody,{
        headers: {'Content-Type': 'application/json'},
      })
      } catch (err) {
        console.error(err)
      } 
    }
  return {RegisterPost}
}
export default useRegister
