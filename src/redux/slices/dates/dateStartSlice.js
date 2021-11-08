import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	startBooking: [],
}

export const dateStartSlice = createSlice({
	name: 'startBooking',
	initialState,
	reducers: {
		setDateStart: (state, action) => {
			state.startBooking = action.payload
		},
	},
})

export const { setDateStart } = dateStartSlice.actions

export default dateStartSlice.reducer
