import usePost from '../Hooks/usePost'
import classes from './PostDetail.module.css'

const PostDetail = () => {

    const { PostID, isLoading } = usePost()
    if (isLoading) return <h1>Loading...</h1>

    const createdAt = new Date(`${PostID?.createdAt}`)
    const updatedAt = new Date(`${PostID?.updatedAt}`)

    return (
      <div className={classes.feedContainer}>
        <div className={classes.PostDetail}>
        <div className={classes.viideo}>
          <iframe width="1000px" height="560px" src={PostID?.videoUrl}/>
        </div>
        <p>comment: {PostID?.comment}</p>
        <p>rating: {PostID?.rating}</p>
        <p>createdAt: {`${createdAt}`}</p>
        <p>updatedAt: {`${updatedAt}`}</p>
        </div>
      </div>
    )
  }
  
  export default PostDetail
  