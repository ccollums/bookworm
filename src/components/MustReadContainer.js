import React from 'react'
import '../css/MustReadContainer.css'
import MustReads from './MustReads'

const MustReadContainer = ({ mustReads, addToReadBooks }) => {

	const displayMustReads = mustReads.map((book, index) => {
		return <MustReads 
			book={book}
			key={index} 
			image={book.image}
			title={book.title}
			addToReadBooks={addToReadBooks}
		/>
	})

	return (
		<section className='container'>
			{displayMustReads}
		</section>
	)
}

export default MustReadContainer; 