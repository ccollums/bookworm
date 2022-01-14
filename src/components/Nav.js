import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Nav.css'
import Hamburger from './Hamburger'

const Nav = () => {
	return (
		<header>
			<h1>BookWorm</h1>
			<Link to={'/'}>Home</Link>
			<Link to={'/must-reads'}>Must Reads</Link>
			<Link to={'/about'}>About</Link>
		</header>
	)
}


export default Nav; 