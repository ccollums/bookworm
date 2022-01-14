import React from 'react'
import '../css/MustReadsPage.css'
import MustReadContainer from './MustReadContainer'
import Nav from './Nav'
import Goals from './Goals'

const MustReadsPage = ({ mustReads }) => {
	return (
		<section className='must-read-page'>
			<div className='left-side'>
				<Nav />
				<h2>Your Must Read Books</h2>
				<Goals />
			</div>
			<MustReadContainer mustReads={mustReads}/>
		</section>
	)
}


export default MustReadsPage;