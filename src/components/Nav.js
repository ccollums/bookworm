import React from 'react'
// import { Link } from 'react-router-dom'
import '../css/Nav.css'
import Hamburger from './Hamburger'

const Nav = () => {
	return (
		<header>
			<h1>BookWorm</h1>
			<div className='nav-pages'>
				<Hamburger />
			</div>
		</header>
	)
}


export default Nav; 