import React from 'react'
import '../css/MustReadsPage.css'
import MustReadContainer from './MustReadContainer'
import Nav from './Nav'
import Goals from './Goals'
import background from '../images/background.png'

const MustReadsPage = ({ mustReads, goal, addToReadBooks, readBooks, clearMustReads }) => {
	return (
		<section className='must-read-page'>
			<div className='left-side' style={{ backgroundImage: `url(${background})`}}>
				<Nav />
				<div className='page-info'>
					<h2>Your Must Reads</h2>
					<Goals goal={goal} readBooks={readBooks}/>
					<button onClick={() => clearMustReads()}>Clear Goals & Must Reads</button>
					<div className='bottom-box'>
						<p>Click books you've completed to add to your goal!</p>
					</div>
				</div>
				</div>
			<MustReadContainer mustReads={mustReads} addToReadBooks={addToReadBooks}/>
		</section>
	)
}


export default MustReadsPage;