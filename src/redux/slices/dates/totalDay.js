import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalBookingDays: [],
}

export const totalDay = createSlice({
	name: 'totalBookingDays',
	initialState,
	reducers: {
		setTotalDay: (state, action) => {
			state.totalBookingDays = action.payload
		},
	},
})

export const { setTotalDay } = totalDay.actions

export default totalDay.reducer
