
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { ContentDTO } from '../types/dto'

const usePost = () => {
  const { id } = useParams()
  const [PostID, setPostID] = useState<ContentDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ContentDTO>(`https://api.learnhub.thanayut.in.th/content/${id}`)
        const resNew = res.data    
        resNew.VideoCode = resNew.videoUrl.substring(resNew.videoUrl.length-11,resNew.videoUrl.length)
        setPostID(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  return { PostID, isLoading }
}

export default usePost
