import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ReadBooksPage.css'
import ReadBooksContainer from './ReadBooksContainer'
import Nav from './Nav'
import Goals from './Goals'
import background from '../images/background.png'
import propTypes from 'prop-types';

const ReadBooksPage = ({ readList, goal, readBooks, clearReadBooks }) => {
	return (
		<section className='read-books-page'>
			<div className='left-side' style={{ backgroundImage: `url(${background})` }}>
				<Nav />
				<div className='page-info'>
					<h2>Your Read Books</h2>
					<Goals goal={goal} readBooks={readBooks} />
					<button className='clear-button' onClick={() => clearReadBooks()}>Clear All Read Books</button>
					<div className='bottom-box'>
						<p>Look how far you've come!</p>
					</div>
				</div>
			</div>
			{readList.length ? <ReadBooksContainer readList={readList} /> :
				<div className='right-side'>
					<p>Go to your <Link to='/must-reads' className='link'> Must Reads</Link> to add books you have completed!</p>
				</div>}
		</section>
	)
}

export default ReadBooksPage;

ReadBooksPage.propTypes = {
	readList: propTypes.array.isRequired,
	goal: propTypes.number.isRequired,
	readBooks: propTypes.number.isRequired,
	clearReadBooks: propTypes.func.isRequired
};