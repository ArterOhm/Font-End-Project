import { Link } from 'react-router-dom'
import classes from './Post.module.css'

const Post = () => {
  return (<div className={classes.post}>
      <Link to={`/post/`} style={{ textDecoration: 'none', color: 'black' }}>
        <p>id: {}</p>
        <p>postedBy: {}</p>
        <p>title: {}</p>
        <p>body: {}</p>
        </Link>
    </div>
  )
}

export default Post
