import React from 'react'
import '../css/MustReadsPage.css'
import MustReadContainer from './MustReadContainer'
import Nav from './Nav'
import Goals from './Goals'

const MustReadsPage = ({ mustReads, goal, addToReadBooks, readBooks }) => {
	return (
		<section className='must-read-page'>
			<div className='left-side'>
				<Nav />
				<h2>Your Must Read Books</h2>
				<Goals goal={goal} readBooks={readBooks}/>
				<div className='bottom-box'>
              <p>Click books you've completed to add to your goal!</p>
            </div>
			</div>
			<MustReadContainer mustReads={mustReads} addToReadBooks={addToReadBooks}/>
		</section>
	)
}


export default MustReadsPage;