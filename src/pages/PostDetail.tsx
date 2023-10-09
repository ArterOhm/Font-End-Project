import classes from './PostDetail.module.css'

const PostDetail = () => {

    return (
      <div className={classes.feedContainer}>
        <div className={classes.PostDetail}>
          <h1>{}</h1>
          <p>postedBy : {}</p>
          <p>{}</p>
        </div>
      </div>
    )
  }
  
  export default PostDetail
  