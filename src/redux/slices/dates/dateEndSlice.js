import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	endBooking: [],
}

export const dateEndSlice = createSlice({
	name: 'endBooking',
	initialState,
	reducers: {
		setDateEnds: (state, action) => {
			state.endBooking = action.payload
		},
	},
})

export const { setDateEnds } = dateEndSlice.actions

export default dateEndSlice.reducer
