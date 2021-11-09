import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	bookingList: [],
	startBooking: [],
	endBooking: [],
	totalDays: [],
}

export const bookSlice = createSlice({
	name: 'booking',
	initialState,
	reducers: {
		setBook: (state, action) => {
			state.bookingList = action.payload
		},
		setDateStart: (state, action) => {
			state.startDate = action.payload
		},
		setDateEnds: (state, action) => {
			state.endDate = action.payload
		},
		setTotalDay: (state, action) => {
			state.totalDays = action.payload
		},
	},
})

export const { setBook, setDateStart, setDateEnds, setTotalDay } = bookSlice.actions

export default bookSlice.reducer
