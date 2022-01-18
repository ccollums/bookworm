import React, { useState } from 'react'
import '../css/Hamburger.css'
import { Link } from 'react-router-dom'

const Hamburger = () => {
	const [open, setOpen] = useState(false)

	return (
		<section>
			<div className={!open ? 'hamburger' : 'hamburger-active'} onClick={() => setOpen(!open)}>
				<span className={open ? 'bar bar1-active' : 'bar bar1'}></span>
				<span className={open ? 'bar bar2-active' : 'bar bar2'}></span>
			</div>
			<ul className={!open ? 'nav-menu' : 'nav-menu-active'}>
				<div className='nav-item'>
					<Link to={'/'} className='links' onClick={() => setOpen(!open)}>Home</Link>
				</div>
				<div className='nav-item'>
					<Link to={'/must-reads'} className='links' onClick={() => setOpen(!open)}>Must Reads</Link>
				</div>
				<div className='nav-item'>
					<Link to={'/read-books'} className='links' onClick={() => setOpen(!open)}>Completed Books</Link>
				</div>
				<div className='nav-item'>
					<Link to={'/about'} className='links' onClick={() => setOpen(!open)}>About</Link>
				</div>
			</ul>
		</section>
	)
}


export default Hamburger; 