import React, { useState } from 'react'
import { PetCardView } from './petCardView'
import { useDispatch } from 'react-redux'
import { setSelected, removePet } from '../../../../../redux/slices/fullPetsSlice'

export const PetCardContainer = (props) => {
	const [checkChoice, setCheckChoice] = useState(false)
	const dispatch = useDispatch()
	const changeHandler = () => {
		setCheckChoice((state) => !state)
		if (checkChoice !== true) {
			dispatch(setSelected(props.item))
		} else {
			dispatch(removePet(props.item))
		}
	}
	return (
		<PetCardView
			checkButton={props.checkButton}
			item={props.item}
			changeHandler={changeHandler}
			checkChoice={checkChoice}
		/>
	)
}
