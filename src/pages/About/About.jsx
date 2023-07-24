import React from 'react'
import classes from './About.module.css'

export default function About() {

  return (
    <div className={classes.about}>
        <h1 className={classes.title}>About</h1>
        <p className={classes.description}>This is a small project in which you can publish various posts. In addition, I used the site API "jsonplaceholder" which provides 100 different posts as a response from the server. These posts can be deleted, filtered by the name of the title or description. Each post also has its own page with comments.</p>
    </div>
  )
}
