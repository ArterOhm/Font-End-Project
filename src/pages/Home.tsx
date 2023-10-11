
import Title from "./Title"
import classes from './Home.module.css'
import Loading from '../Tools/Loading'
import { useAuth } from "../provifers/AuthProvider"
import usePosts from "../Hooks/usePosts"
import Post from "../components/Post"

const Home = () => {
  const { isLoggedIn } = useAuth()
  const { posts, isLoading } = usePosts() // for Hooks
  console.log(posts)
  console.log(isLoggedIn)

  if(isLoading) return Loading()
  
    return (
      <>
        <Title />
        <h2>Feed</h2>
        <div className={classes.feedContainer} >
        {posts &&
        posts.map((post) => {
            return <Post key={post.id} post={post}/>
          })}
        </div>
      </>
    )
  }
  
  export default Home
  