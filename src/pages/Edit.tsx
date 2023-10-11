
import usePost from "../Hooks/usePost"
import YouTube from "react-youtube"
import classes from "./Edit.module.css"
import { FormEvent, useState } from "react"
import useEdit from "../Hooks/useEdit"
import { useNavigate } from "react-router-dom"

import Loading from "../Tools/Loading"



const Edit = () => {
  const {PostID, isLoading} = usePost()
  const navigate = useNavigate()
  const {EditPost} = useEdit()
  const [comment, setComment] = useState<string>('')
  const [rating, setRating] = useState<number>(0)


  if(isLoading) return Loading()

  const hendleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {await EditPost(comment,rating)
      navigate(`/post/${PostID?.id}`)
    } catch (err) {
      console.error(err)
    }
  }
    return (
      <div className={classes.feedContainer}>
        <div className={classes.PostDetail}>
        <div className={classes.video} >
          <YouTube videoId={PostID?.VideoCode} />
        </div>
        <form className={classes.postForm} onSubmit={hendleSubmit}>
        <label>Comment</label>
        <input type='text' placeholder ='comment' defaultValue={PostID?.comment} onChange={(e) => setComment(e.target.value)} required />
        <label>Rating</label>
        <input type='Number' min="0" max="5" placeholder ='rating' defaultValue={PostID?.rating} onChange={(e) => setRating(e.target.valueAsNumber)} required />
        <button type="submit">
          submit
        </button>
      </form>
        </div>
      </div>
    )
  }
  
  export default Edit