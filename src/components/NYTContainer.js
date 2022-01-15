import React from 'react'
import '../css/NYTContainer.css'
import BestSellers from './BestSellers'
import propTypes from 'prop-types';

const NYTContainer = ({ nytBooks, addToMustReads }) => {


	const displayBooks = nytBooks.map((book) => {
		return <BestSellers
			book={book}
			key={book.rank} 
			image={book.image}
			title={book.title}
			addToMustReads={addToMustReads}
		/>
	})

	return (
		<section className='container'>
			{displayBooks}
		</section>
	)
}

export default NYTContainer; 

NYTContainer.propTypes = {
  nytBooks: propTypes.array.isRequired,
	addToMustReads: propTypes.func.isRequired,
};