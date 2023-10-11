// const ToolTime = ()=>{
const Time =(Update:number) => {
    const timeDate = Number(new Date())
    let t = timeDate - Update
    t = t/1000
    if(t>31104000) {
      return `${Math.floor(t/31104000)} years ago` 
    }else if(t>2592000) {
      return `${Math.floor(t/2592000)} months ago`
    }else if(t>86400) {
      return `${Math.floor(t/86400)} days ago`
    }else if(t>3600) {
      return `${Math.floor(t/3600)} hours ago`
    }else if(t>60) {
      return `${Math.floor(t/60)} minutes ago`
    }else if(t>0) {
      return `${Math.floor(t/1)} seconds ago`
    }else 
      return ""
  } 


  export default Time