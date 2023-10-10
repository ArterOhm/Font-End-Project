import classes from './Profile.module.css'


const Profile = () => {
    // const { username } = useAuth()
    return (
      <>
        <div className={classes.card}>
          <h3>{'Welcome!'}</h3>
          {/* <p>{username}</p> */}
        </div>
      </>
    )
  }
  export default Profile
  