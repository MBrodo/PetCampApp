import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	id: [],
	settings: [],
	info: [],
}

export const userSlice = createSlice({
	name: 'id',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.info = action.payload
		},
		setUserId: (state, action) => {
			state.id = action.payload
		},
		setSettings: (state, action) => {
			state.settings = action.payload
		},
	},
})

export const { setUser, setUserId, setSettings } = userSlice.actions

export default userSlice.reducer
