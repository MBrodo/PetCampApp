import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	all: [],
	profilePetsList: [],
}

export const fullPetList = createSlice({
	name: 'all',
	initialState,
	reducers: {
		setPetsList: (state, action) => {
			state.all = action.payload
		},
		setPets: (state, action) => {
			state.profilePetsList = action.payload
		},
	},
})

export const { setPetsList, setPets } = fullPetList.actions

export default fullPetList.reducer
