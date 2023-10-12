
import classes from './Loading.module.css'

const Loading = () =>{
     return (
        <div className ={classes.loadFlex}>
        <div className ={classes.loader}>
          <div className ={classes.circle}></div>
          <div className ={classes.circle}></div>
          <div className ={classes.circle}></div>
          <div className ={classes.circle}></div>
        </div>
        </div>
        )
}
export default Loading