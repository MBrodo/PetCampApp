import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	camps: [],
	rooms: [],
	pickRooms: [],
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
		setPickRooms: (state, action) => {
			state.pickRooms.push(action.payload)
		},
		clearPickRooms: (state, action) => {
			state.pickRooms = action.payload
		},
	},
})

export const { setCamps, setRoom, setPickRooms, clearPickRooms } = petCampsSlice.actions

export default petCampsSlice.reducer
