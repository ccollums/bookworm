import React from 'react'
import '../css/ReadBooks.css'
import propTypes from 'prop-types';

const ReadBooks = ({ image, title, book }) => {

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
  book: propTypes.object.isRequired,
};