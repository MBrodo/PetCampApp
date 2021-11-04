import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	petsList: [],
}

export const fullPetList = createSlice({
	name: 'petsList',
	initialState,
	reducers: {
		setPetsList: (state, action) => {
			state.petsList = action.payload
		},
	},
})

export const { setPetsList } = fullPetList.actions

export default fullPetList.reducer
