import { FormEvent, useState } from 'react'
import classes from './Create.module.css'
import { useNavigate } from 'react-router'
import useCreate from '../Hooks/useCreate'

const Create = () => {

  const navigate = useNavigate()
  const {CreatePost} =useCreate()
  const [videoUrl, setVideoUrl] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const [rating, setRating] = useState<number>(0)

  const hendleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {await CreatePost(videoUrl,comment,rating),
      setVideoUrl('')
      setComment('')
      setRating(0)
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className={classes.container}>
      <form className={classes.postForm} onSubmit={hendleSubmit}>
        <label>VideoUrl</label>
        <input type='url' placeholder ='Url' onChange={(e) => setVideoUrl(e.target.value)} required />
        <label>Comment</label>
        <input type='text' placeholder ='comment' onChange={(e) => setComment(e.target.value)} required />
        <label>Rating</label>
        <input type='Number' min="0" max="5" placeholder ='rating' onChange={(e) => setRating(e.target.valueAsNumber)} required />
        <button type="submit">
          submit
        </button>
      </form>
    </div>
  )

}

export default Create
