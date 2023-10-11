
import axios from 'axios'
import {  EditContentDTO } from '../types/dto'
import { useParams } from 'react-router-dom'

const token = localStorage.getItem('token')
const useEdit = () => {
    const { id } = useParams()
    const EditPost = async ( comment: string, rating: number) => {
        const EditPostBody: EditContentDTO = { comment, rating }
      try {await axios.patch<EditContentDTO>(`https://api.learnhub.thanayut.in.th/content/${id}`,EditPostBody,{
        headers: {'Content-Type': 'application/json' ,Authorization : `Bearer ${token}`},
      })
      } catch (err) {
        throw new Error('Con not edit post')
      } 
    }
  return {EditPost}
}
export default useEdit
