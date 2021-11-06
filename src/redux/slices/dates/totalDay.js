import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalDay: [],
}

export const totalDay = createSlice({
	name: 'totalDay',
	initialState,
	reducers: {
		setTotalDay: (state, action) => {
			state.totalDay = action.payload
		},
	},
})

export const { setTotalDay } = totalDay.actions

export default totalDay.reducer
