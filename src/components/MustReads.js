import React from 'react'
import '../css/MustReads.css'
import propTypes from 'prop-types';

const MustReads = ({ image, title, book, addToReadBooks }) => {

	return (
		<img className='book-cover' src={image} alt={title} onClick={() => addToReadBooks(book)} />
	)
}

export default MustReads;

MustReads.propTypes = {
	image: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	book: propTypes.object.isRequired,
	addToReadBooks: propTypes.func.isRequired,
};