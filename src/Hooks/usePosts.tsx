import { useEffect, useState } from "react"
import {  ContentDTO, ContentsDTO  } from "../types/dto"
import axios from "axios"


const usePosts =() =>{
    const [posts, setPosts] = useState<ContentDTO[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true)
        try {
          const res = await axios.get<ContentsDTO>('https://api.learnhub.thanayut.in.th/content/')
          const resNew = res.data.data     
          resNew.map((e) =>{e.VideoCode = e.videoUrl.substring(e.videoUrl.length-11,e.videoUrl.length)})
          setPosts(res.data.data) 
        } catch (err) {
          console.error(err)
        } finally {
          setIsLoading(false)
        }
      }
  
      fetchData()
    }, [])
  

return { posts, isLoading}
  }


export default usePosts