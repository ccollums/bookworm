import React, { useState } from 'react'
import '../css/MustReads.css'
import propTypes from 'prop-types';

const MustReads = ({ image, title, addToReadBooks }) => {
	const [read, setRead] = useState('')

	const markBookRead = () => {
		setRead('read')
		addToReadBooks()
	}

	return (
		<React.Fragment>
			{!read ? <img className='book-cover' src={image} alt={title} onClick={markBookRead}/> :
				<div>
					<img className='read-book-cover' src={image} alt={title}/>
					<p className='read'>READ</p>
				</div>
			}
		</React.Fragment>
	)
}


export default MustReads; 

MustReads.propTypes = {
  image: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	addToReadBooks: propTypes.func.isRequired,
};