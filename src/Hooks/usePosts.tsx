import { useEffect, useState } from "react"
import {  ContentDTO, ContentsDTO  } from "../types/dto"
import axios from "axios"


const usePosts =() =>{
    const [posts, setPosts] = useState<ContentDTO[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    // const [isSubmitPost, setIsSubmitPost] = useState<boolean>(false)
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true)
        try {
          const res = await axios.get<ContentsDTO>('https://api.learnhub.thanayut.in.th/content/')

          setPosts(res.data.data)
        } catch (err) {
          console.error(err)
        } finally {
          setIsLoading(false)
        }
      }
  
      fetchData()
    }, [])
  
    // const createPost = async (newTitle: string, newBody: string) => {
    //   const newPostBody: CreateContentDTO = {
    //     userId: Math.floor(Math.random() * 1000),
    //     title: newTitle,
    //     body: newBody,
    //     videoUrl: string
    //     comment: string
    //     rating: number
    //   }
  
    //   setIsSubmitPost(true)
    //   try {
    //     const res = await axios.post<ContentDTO>('https://jsonplaceholder.typicode.com/posts', newPostBody, {
    //       headers: { 'Content-Type': 'application/json' },
    //     })
  
    //     console.log(res.data)
    //   } catch (err) {
    //     throw new Error('Cannot create post')
    //   } finally {
    //     setIsSubmitPost(false)
    //   }
    // }
  
return { posts, isLoading, /*isSubmitPost, reatePost*/ }
  }


export default usePosts