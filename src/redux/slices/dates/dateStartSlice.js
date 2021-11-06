import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	dateStart: [],
}

export const dateStartSlice = createSlice({
	name: 'dateStart',
	initialState,
	reducers: {
		setDateStart: (state, action) => {
			state.dateStart = action.payload
		},
	},
})

export const { setDateStart } = dateStartSlice.actions

export default dateStartSlice.reducer
