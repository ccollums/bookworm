import React, { useState } from 'react'
import '../css/MustReads.css'
import propTypes from 'prop-types';

const MustReads = ({ image, title, book, addToReadBooks }) => {

	const completedBook = () => {
		addToReadBooks(book)
	}

	return (
		<img className='book-cover' src={image} alt={title} onClick={completedBook}/>
	)
}


export default MustReads; 

MustReads.propTypes = {
  image: propTypes.string.isRequired,
	book: propTypes.object.isRequired,
	title: propTypes.string.isRequired,
	addToReadBooks: propTypes.func.isRequired,
};