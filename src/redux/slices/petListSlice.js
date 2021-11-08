import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	profilePetsList: [],
}

export const petListSlice = createSlice({
	name: 'profilePetsList',
	initialState,
	reducers: {
		setPets: (state, action) => {
			state.profilePetsList = action.payload
		},
	},
})

export const { setPets } = petListSlice.actions

export default petListSlice.reducer
