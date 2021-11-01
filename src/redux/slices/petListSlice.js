import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	pets: [],
}

export const petListSlice = createSlice({
	name: 'pets',
	initialState,
	reducers: {
		setPets: (state, action) => {
			state.pets = action.payload
		},
	},
})

export const { setPets } = petListSlice.actions

export default petListSlice.reducer
