import React, { useState } from 'react'
import '../css/Form.css'

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
		clearInput()
	}

	const clearInput = () => {
		setGoalInput('')
	}

	return (
		<form>
			<input
				type='number'
				name='goal'
				placeholder='change goal'
				value={goalInput}
				onChange={e => setGoalInput(e.target.value)}/>
			<button onClick={(e => submitGoal(e))}>Submit</button>
			{error ? <p>Please add a goal!</p> : <p></p>}
		</form>
	)
}


export default Form;