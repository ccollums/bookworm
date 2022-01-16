import React from 'react'
import '../css/ErrorPage.css'
import Nav from './Nav.js'
import { Link } from 'react-router-dom'
import background from '../images/background.png'

const ErrorPage = () => {
	return (
		<section className='error-page'>
			<div className='left-side' style={{ backgroundImage: `url(${background})`}}>
            <Nav />
            
          </div>
			<div className='right-side-error-page'>
				<p>Oops, wrong link! Go  <Link to='/' className='link'> Home</Link></p>			
			</div>
		</section>
	)
}

export default ErrorPage; 