import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	camps: [],
	rooms: [],
}

export const petCampsSlice = createSlice({
	name: 'camps',
	initialState,
	reducers: {
		setCamps: (state, action) => {
			state.camps = action.payload
		},
		setRoom: (state, action) => {
			state.rooms = action.payload
		},
	},
})

export const { setCamps, setRoom } = petCampsSlice.actions

export default petCampsSlice.reducer
