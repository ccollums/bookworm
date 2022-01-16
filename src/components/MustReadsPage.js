import React from 'react'
import { Link } from 'react-router-dom'
import '../css/MustReadsPage.css'
import MustReadContainer from './MustReadContainer'
import Nav from './Nav'
import Goals from './Goals'
import background from '../images/background.png'
import propTypes from 'prop-types';

const MustReadsPage = ({ mustReads, goal, addToReadBooks, readBooks, clearMustReads }) => {
	return (
		<section className='must-read-page'>
			<div className='left-side' style={{ backgroundImage: `url(${background})`}}>
				<Nav />
				<div className='page-info'>
					<h2>Your Must Reads</h2>
					<Goals goal={goal} readBooks={readBooks}/>
					<button className='clear-button'onClick={() => clearMustReads()}>Clear Goals & Must Reads</button>
					<div className='bottom-box'>
						<p>Click books you've completed to add to your goal!</p>
					</div>
				</div>
				</div>
					{mustReads.length ? <MustReadContainer mustReads={mustReads} addToReadBooks={addToReadBooks}/> :
					<div className='right-side'>
					<p>Go <Link to='/' className='link'> Home</Link> and add some books to your must read list!</p>			
					</div>}
				
		</section>
	)
}

export default MustReadsPage;

MustReadsPage.propTypes = {
  mustReads: propTypes.array.isRequired,
  goal: propTypes.number.isRequired,
  readBooks: propTypes.number.isRequired,
  addToReadBooks: propTypes.func.isRequired,
	clearMustReads: propTypes.func.isRequired,
};