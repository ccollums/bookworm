import React from 'react'
import '../css/BestSellers.css'

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