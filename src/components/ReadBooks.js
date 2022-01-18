import React from 'react'
import propTypes from 'prop-types';

const ReadBooks = ({ image, title }) => {

	return (
		<section>
			<img className='book-cover' src={image} alt={title} />
		</section>
	)
}

export default ReadBooks;

ReadBooks.propTypes = {
	image: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
};