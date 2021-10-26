import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	camps: [],
}

export const petCampsSlice = createSlice({
	name: 'camps',
	initialState,
	reducers: {
		setCamps: (state, action) => {
			state.camps = action.payload
		},
	},
})

export const { setCamps } = petCampsSlice.actions

export default petCampsSlice.reducer
