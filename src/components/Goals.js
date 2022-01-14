import React from 'react'
import '../css/Goals.css'

const Goals = ({ goal, readBooks }) => {
	return (
		<div className='goal-sentence'>
			<p>read</p>
			<p className='number'>{readBooks}</p>
			<p>of your</p>
			<p className='number'>{goal}</p>
			<p>goal</p>
		</div>
	)
}

export default Goals;