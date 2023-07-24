import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetching from '../../hooks/useFetching'
import PostService from '../../API/PostService'
import Loader from '../../components/UI/loader/Loader'
import classes from './PostIdPage.module.css'

export default function PostIdPage() {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [postIdFetching, isPostLoading, postError] = useFetching( async ()=>{
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    const [comFetching, isComLoading] = useFetching( async ()=>{
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    })


    useEffect(()=>{
        postIdFetching()
        comFetching()
    }, [])

    return (
        <div>

            { 
                postError
                ? <h1 style={{color: 'red', textAlign:'center'}}>{postError}</h1>
                : isPostLoading 
                    ? <Loader/>
                    : <div>
                        <h1 className={classes.title}>{post.title}</h1>
                        <h3 className={classes.postId}>(Post ID: {post.id})</h3>
                        <h4 className={classes.postBody}>{post.body}</h4>
                        <h2 className={classes.commentsTitle}>Comments:</h2>
                        {
                            isComLoading ? <Loader/>
                            : comments.map( com => {
                                return <div className={classes.comment} key={com.id}>
                                    <h4 className={classes.commentName}>{com.name}</h4>
                                    <p className={classes.commentBody}>{com.body}</p>
                                </div>
                            } )
                        }
                    </div>
            }

        </div>
    )
}
