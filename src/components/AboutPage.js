import React from 'react'
import Nav from './Nav'
import '../css/AboutPage.css'

const AboutPage = () => {
	return (
		<section className='about-page'>
			<div className='left-side'>
				<Nav />
				<h2>About</h2>
				<p>it is me</p>
			</div>
			<div className='container'>
				<p>1</p>
				<p>2</p>
			</div>
		</section>
	)
}

export default AboutPage; 