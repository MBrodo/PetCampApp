import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	bookingList: [],
}

export const bookSlice = createSlice({
	name: 'bookingList',
	initialState,
	reducers: {
		setBook: (state, action) => {
			state.bookingList = action.payload
		},
	},
})

export const { setBook } = bookSlice.actions

export default bookSlice.reducer
