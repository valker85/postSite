import React from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      
      <div className={classes.links}>
        <Link to='/about'>About</Link>
        <Link to='/'>Posts</Link>
      </div>

      <div className={classes.website}>
        <h3>My personal website:</h3>
        <a className={classes.website} href="https://valker85.github.io/" target='_blank'>https://valker85.github.io/</a>
      </div>

    </footer>
  )
}
