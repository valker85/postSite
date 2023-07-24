import React, { useEffect } from 'react'
import PostItem from '../PostItem/PostItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import classes from './PostList.module.css'

export default function PostList({posts, remove}) {

    useEffect(() => {
        
    }, [])
    
    return (
        <div>
            {
                !!posts.length && <h1 className={classes.postList}>Posts List</h1>
            }

            <TransitionGroup>
            { 
                posts.map( (post, index) => {
                    return <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem 
                            remove={remove}
                            post={post}
                        />
                    </CSSTransition>

                }) 
            }
            </TransitionGroup>

        </div>
    )
}
