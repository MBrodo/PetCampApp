import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	bookingList: [],
	startBooking: [],
	endBooking: [],
	totalDays: [],
	all: [],
	currentCamp: [],
	checkPage: false,
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
		setAllBookings: (state, action) => {
			state.all = action.payload
		},
		setCurrentCamp: (state, action) => {
			state.currentCamp = action.payload
		},
		checkPage: (state, action) => {
			state.checkPage = action.payload
		},
	},
})

export const {
	setBook,
	setDateStart,
	setDateEnds,
	setTotalDay,
	setAllBookings,
	setCurrentCamp,
	checkPage,
} = bookSlice.actions

export default bookSlice.reducer
