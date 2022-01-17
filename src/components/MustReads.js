import React, { useState } from 'react'
import '../css/MustReads.css'
import propTypes from 'prop-types';

const MustReads = ({ image, title, addToReadBooks }) => {

	return (
		<img className='book-cover' src={image} alt={title} onClick={() => addToReadBooks()}/>
	)
}


export default MustReads; 

MustReads.propTypes = {
  image: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	addToReadBooks: propTypes.func.isRequired,
};