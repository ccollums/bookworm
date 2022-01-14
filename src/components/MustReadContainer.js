import React from 'react'
import '../css/MustReadContainer.css'
import MustReads from './MustReads'

const MustReadContainer = ({ mustReads }) => {

	const displayMustReads = mustReads.map((book) => {
		return <MustReads 
			book={book}
			key={book.rank} 
			image={book.image}
			title={book.title}
		/>
	})

	return (
		<section className='container'>
			{displayMustReads}
		</section>
	)
}

export default MustReadContainer; 