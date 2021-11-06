import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	dateEnd: [],
}

export const dateEndSlice = createSlice({
	name: 'dateEnd',
	initialState,
	reducers: {
		setDateEnds: (state, action) => {
			state.dateEnd = action.payload
		},
	},
})

export const { setDateEnds } = dateEndSlice.actions

export default dateEndSlice.reducer
