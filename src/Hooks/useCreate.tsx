
import axios from 'axios'
import {  CreateContentDTO } from '../types/dto'

const token = localStorage.getItem('token')
const useCreate = () => {
    const CreatePost = async (videoUrl: string, comment: string, rating: number) => {
        const CreatePostBody: CreateContentDTO = { videoUrl, comment, rating }
      try {await axios.post<CreateContentDTO>(`https://api.learnhub.thanayut.in.th/content`,CreatePostBody,{
        headers: {'Content-Type': 'application/json' ,Authorization : `Bearer ${token}`},
      })
      } catch (err) {
        throw new Error('Con not create post')
      } 
    }
  return {CreatePost}
}
export default useCreate
