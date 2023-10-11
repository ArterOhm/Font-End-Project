import { Link } from 'react-router-dom'
import classes from './Post.module.css'
// import YouTube from 'react-youtube'
import { ContentDTO,} from '../types/dto'
interface IPostProps {
  post : ContentDTO
}
const Post = ({post}:IPostProps) => {
  const {thumbnailUrl ,videoTitle,comment ,rating,id} = post
  return (
  <div className={classes.post}>
      <Link to={`/post/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <div className={classes.viideo}>
        <img src={thumbnailUrl} alt={videoTitle} />
        </div>
        <h3>{videoTitle}</h3>
        <p>comment: {comment}</p>
        <p>rating: {rating}</p>
        </Link>
    </div>
  )
}

export default Post
