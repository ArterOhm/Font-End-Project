import { FormEvent, useState } from 'react'

import classes from './Create.module.css'
import { useNavigate } from 'react-router'

const Create = () => {
  const navigate = useNavigate()
  const [newTitle, setnewTitle] = useState<string>('')
  const [newBody, setnewBody] = useState<string>('')

  const hendleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // test 
    const newPostBody= {
      userId: Math.floor(Math.random() * 1000),
      title: newTitle,
      body: newBody,
    }
    await console.log(newPostBody)

    // --------------------
    try {
      setnewTitle('')
      setnewBody('')
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className={classes.container}>
      <form className={classes.postForm} onSubmit={hendleSubmit}>
        <label>Title</label>
        <input type='text' value={newTitle} onChange={(e) => setnewTitle(e.target.value)} required />
        <label>Body</label>
        <input type='text' className={classes.inputBody}  value={newBody} onChange={(e) => setnewBody(e.target.value)} required />
        <button type="submit">
          submit
        </button>
      </form>
    </div>
  )

}

export default Create
