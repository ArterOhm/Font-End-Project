import { Link } from 'react-router-dom'
import classes from './Post.module.css'
import { ContentDTO,} from '../types/dto'
interface IPostProps {
  post : ContentDTO
}
const Post = ({post}:IPostProps) => {
  const {videoUrl ,comment ,rating } = post
  return (<div className={classes.post}>
      <Link to={`/post/`} style={{ textDecoration: 'none', color: 'black' }}>
        <p>{videoUrl}</p>
        <p>comment: {comment}</p>
        <p>rating: {rating}</p>
        </Link>
    </div>
  )
}

export default Post
