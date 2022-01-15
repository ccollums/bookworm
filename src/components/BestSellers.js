import React from 'react'
import '../css/BestSellers.css'
import propTypes from 'prop-types';

const BestSellers = ({ image, title, book, addToMustReads }) => {

	const saveBook = () => {
		addToMustReads(book)
	}

	return (
		<section>
			<img className='book-cover' src={image} alt={title} onClick={saveBook}/>
		</section>
	)
}

export default BestSellers; 

BestSellers.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  book: propTypes.object.isRequired,
  addToMustReads: propTypes.func.isRequired,
};