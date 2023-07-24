import React, { useEffect } from 'react'
import MyButton from '../UI/button/MyButton'
import { Link } from 'react-router-dom'
import classes from './PostItem.module.css'

export default function PostItem({post, remove}) {

    useEffect(()=>{

    },[])

    return (
        <div>
            <div className={classes.post}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>

                <div className={classes.buttons}>
                    <MyButton><Link to={`/post/${post.id}`}>Open</Link></MyButton>
                    <MyButton color="error" onClick={()=>remove(post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    )
}
