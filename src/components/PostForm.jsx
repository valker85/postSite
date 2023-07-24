import React, { useEffect, useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

export default function PostForm({create}) {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })


    function createPost(e) {
        e.preventDefault()
        const newPost = {...post, id: Date.now()}
        create(newPost)
        setPost({title: '', body: ''})
    }


    return (
    <div>
        <form>
            <MyInput 
                onChange={(e)=>setPost({...post, title: e.target.value})} 
                value={post.title} 
                type="text" 
                placeholder="name"
            />

            <MyInput 
                onChange={(e)=>setPost({...post, body: e.target.value})} 
                value={post.description} 
                type="text" 
                placeholder="description"
            />
            
            <MyButton onClick={(e)=>createPost(e)}>Create post</MyButton>
        </form>
    </div>
  )
}
