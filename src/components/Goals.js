import React from 'react'
import '../css/Goals.css'

const Goals = ({ goal, readBooks }) => {
	return (
		<p>read {readBooks} of your {goal} goal</p>
	)
}

export default Goals;