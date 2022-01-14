import React from 'react'
import '../css/MustReads.css'

const MustReads = ({ image, title, addToReadBooks }) => {

	return (
		<img className='book-cover' src={image} alt={title} onClick={() => addToReadBooks()}/>
	)
}


export default MustReads; 