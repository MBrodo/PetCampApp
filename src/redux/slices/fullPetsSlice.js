import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	fullPetsList: [],
}

export const fullPetList = createSlice({
	name: 'fullPetsList',
	initialState,
	reducers: {
		setPetsList: (state, action) => {
			state.fullPetsList = action.payload
		},
	},
})

export const { setPetsList } = fullPetList.actions

export default fullPetList.reducer
