import React from 'react'
import ReadBooks from './ReadBooks'
import propTypes from 'prop-types';

const ReadBooksContainer = ({ readList }) => {

	const displayReadBooks = readList.map((book, index) => {
		return <ReadBooks
			key={index}
			image={book.image}
			title={book.title}
		/>
	})

	return (
		<section className='container'>
			{displayReadBooks}
		</section>
	)
}

export default ReadBooksContainer;

ReadBooksContainer.propTypes = {
	readList: propTypes.array.isRequired,
};