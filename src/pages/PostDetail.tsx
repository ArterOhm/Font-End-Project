import YouTube from 'react-youtube'
import usePost from '../Hooks/usePost'
import classes from './PostDetail.module.css'
import { Link, useNavigate} from 'react-router-dom'
import { FormEvent, useState } from 'react'
import useDelete from '../Hooks/useDelete'
import Time from '../Tools/Time'
import Loading from '../Tools/Loading'


const PostDetail = () => {
    const { PostID, isLoading } = usePost()
    const navigate = useNavigate()
    const {DeletePost} = useDelete()
    const [alertDel, setAlertDel] = useState<boolean>(false)
    
    if(isLoading) return Loading()
    
    const createdAt = new Date(`${PostID?.createdAt}`)
    const updatedAt = new Date(`${PostID?.updatedAt}`)
    


    const ClickDelete = async (e: FormEvent) => {
      e.preventDefault()
      try {await 
        DeletePost(PostID?.id)
        setAlertDel(true)
        navigate('/')
      } catch (err) {
        console.error(err)
      }
    }
    
    
    const ClickCancel = async (e: FormEvent) => {
      e.preventDefault()
      try {await setAlertDel(false)
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
        <h3>{PostID?.videoTitle}</h3>
        <p>comment: {PostID?.comment}</p>
        <p>rating: {PostID?.rating}</p>
        <p>createdAt: {`${createdAt}`}</p>
        <p>updatedAt: {`${updatedAt}`}</p>
        <p>{Time(Number(updatedAt))}</p>
        <Link className={classes.EditPost} to={`/post/${PostID?.id}/edit`}> EditPost </Link>
        <a className={classes.DeletePost} onClick={()=>setAlertDel(true)}> Delete </a> 
        </div>
        <div className={alertDel?(classes.alertDel):(classes.cancelDel)} >
          <button onClick= {ClickDelete}>Delete</button>
          <button onClick= {ClickCancel}>Cancel</button>
        </div>
      </div>
    )
  }
  
  export default PostDetail
  