import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Nav.css'
import Hamburger from './Hamburger'

const Nav = () => {
	return (
		<header>
			<h1>BookWorm</h1>
			<div className='nav-pages'>
				<Link to={'/'} className='links'>Home</Link>
				<Link to={'/must-reads'} className='links'>Must Reads</Link>
				<Link to={'/about'} className='links'>About</Link>
			</div>
		</header>
	)
}


export default Nav; 