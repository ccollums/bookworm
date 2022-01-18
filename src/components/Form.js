import React, { useState } from 'react'
import '../css/Form.css'
import propTypes from 'prop-types';

const Form = ({ addGoal }) => {
	const [goalInput, setGoalInput] = useState('')
	const [error, setError] = useState(false)

	const submitGoal = (e) => {
		e.preventDefault()
		if (!goalInput) {
			setError(true)
		} else {
			setError(false)
			addGoal(Number(goalInput))
		}
		setGoalInput('')
	}

	return (
		<form>
			<input
				type='number'
				name='goal'
				placeholder='change goal'
				value={goalInput}
				onChange={e => setGoalInput(e.target.value)} />
			<button onClick={(e => submitGoal(e))}>Submit</button>
			{error ? <p className='error'>Please add a goal!</p> : <p style={{ opacity: "0" }}>Error placeholder</p>}
		</form>
	)
}


export default Form;

Form.propTypes = {
	addGoal: propTypes.func.isRequired,
};