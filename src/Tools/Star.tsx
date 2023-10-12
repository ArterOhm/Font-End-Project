import classes from'./Star.module.css'

const Star = (rating :number) =>{
    if (rating == 0){
      return (
        <div className={classes.rating}>
        <label title="text" htmlFor="star5" className={classes.star}></label>
        <label title="text" htmlFor="star4" className={classes.star}></label>
        <label title="text" htmlFor="star3" className={classes.star}></label>
        <label title="text" htmlFor="star2" className={classes.star}></label>
        <label title="text" htmlFor="star1" className={classes.star}></label>
      </div>
    )
    } else if(rating== 1){
      return (
        <div className={classes.rating}>
        <label title="text" htmlFor="star5" className={classes.star}></label>
        <label title="text" htmlFor="star4" className={classes.star}></label>
        <label title="text" htmlFor="star3" className={classes.star}></label>
        <label title="text" htmlFor="star2" className={classes.star}></label>
        <label title="text" htmlFor="star1" ></label>
      </div>
    )     
    }else if(rating== 2){
      return (
        <div className={classes.rating}>
        <label title="text" htmlFor="star5" className={classes.star}></label>
        <label title="text" htmlFor="star4" className={classes.star}></label>
        <label title="text" htmlFor="star3" className={classes.star}></label>
        <label title="text" htmlFor="star2" ></label>
        <label title="text" htmlFor="star1" ></label>
      </div>
    )     
    }else if(rating == 3){
      return (
        <div className={classes.rating}>
        <label title="text" htmlFor="star5" className={classes.star}></label>
        <label title="text" htmlFor="star4" className={classes.star}></label>
        <label title="text" htmlFor="star3" ></label>
        <label title="text" htmlFor="star2" ></label>
        <label title="text" htmlFor="star1" ></label>
      </div>
    )     
    }else if(rating== 4){
      return (
        <div className={classes.rating}>
        <label title="text" htmlFor="star5" className={classes.star}></label>
        <label title="text" htmlFor="star4" ></label>
        <label title="text" htmlFor="star3" ></label>
        <label title="text" htmlFor="star2" ></label>
        <label title="text" htmlFor="star1" ></label>
      </div>
    )     
    }else if(rating== 5){
      return (
        <div className={classes.rating}>
        <label title="text" htmlFor="star5" ></label>
        <label title="text" htmlFor="star4" ></label>
        <label title="text" htmlFor="star3" ></label>
        <label title="text" htmlFor="star2" ></label>
        <label title="text" htmlFor="star1" ></label>
      </div>
    )     
    }
}
export default Star