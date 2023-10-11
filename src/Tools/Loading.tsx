
import classesLoading from './Loading.module.css'

const Loading = () =>{
     return (
        <div className ={classesLoading.loadFlex}>
        <div className ={classesLoading.loader}>
          <div className ={classesLoading.circle}></div>
          <div className ={classesLoading.circle}></div>
          <div className ={classesLoading.circle}></div>
          <div className ={classesLoading.circle}></div>
        </div>
        </div>
        )
}
export default Loading