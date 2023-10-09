import Post from "../components/Post"
import Title from "./Title"
import classes from './Home.module.css'

const Home = () => {
    return (
      <div>
        <Title />
        <h2>Feed</h2>
        <div className={classes.feedContainer} >
        <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    )
  }
  
  export default Home
  