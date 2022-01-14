import React from 'react'
import '../css/MustReads.css'

const MustReads = ({ image, title }) => {
	return (
		<img className='book-cover' src={image} alt={title}/>
	)
}


export default MustReads; 