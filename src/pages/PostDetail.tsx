import YouTube from 'react-youtube'
import usePost from '../Hooks/usePost'
import classes from './PostDetail.module.css'
import { Link } from 'react-router-dom'

const PostDetail = () => {
    const { PostID, isLoading } = usePost()
    if (isLoading) return <h1>Loading...</h1>
    console.log(PostID)
    const createdAt = new Date(`${PostID?.createdAt}`)
    const updatedAt = new Date(`${PostID?.updatedAt}`)
    return (
      <div className={classes.feedContainer}>
        <div className={classes.PostDetail}>
        <div className={classes.video} >
          <YouTube videoId={PostID?.VideoCode} />
        </div>
        <p>comment: {PostID?.comment}</p>
        <p>rating: {PostID?.rating}</p>
        <p>createdAt: {`${createdAt}`}</p>
        <p>updatedAt: {`${updatedAt}`}</p>
        <Link className={classes.EditPost} to={`/post/${PostID?.id}/edit`}> EditPost </Link>
        </div>
      </div>
    )
  }
  
  export default PostDetail
  