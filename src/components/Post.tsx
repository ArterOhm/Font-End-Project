import { Link } from 'react-router-dom'
import classes from './Post.module.css'
import { ContentDTO,} from '../types/dto'
interface IPostProps {
  post : ContentDTO
}
const Post = ({post}:IPostProps) => {
  const {videoUrl ,comment ,rating,id} = post
  return (<div className={classes.post}>
      <Link to={`/post/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <div className={classes.viideo}>
          <iframe width="360px" height="240px" src={videoUrl}/>
        </div>
        <p>comment: {comment}</p>
        <p>rating: {rating}</p>
        </Link>
    </div>
  )
}

export default Post
