
import axios from 'axios'

const token = localStorage.getItem('token')
const useDelete = () => {

    const DeletePost = async ( id:number |undefined) => {
      try {await axios.delete(`https://api.learnhub.thanayut.in.th/content/${id}`,{
        headers: {'Content-Type': 'application/json' ,Authorization : `Bearer ${token}`},
      })
      } catch (err) {
        throw new Error('Con not edit post')
      } 
    }
  return {DeletePost}
}
export default useDelete
