import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Header.module.css'

const setActive = ({ isActive }) => isActive ? classes.active : ''


export default function Header() {
  return (
    <header className={classes.header}>
        <NavLink to="/" className={setActive}>Post</NavLink>
        <NavLink to="/about" className={setActive}>About</NavLink>
    </header>
  )
}
