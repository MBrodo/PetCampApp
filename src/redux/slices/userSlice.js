import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	id: [],
	settings: [],
}

export const userSlice = createSlice({
	name: 'id',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.id = action.payload
		},
		setSettings: (state, action) => {
			state.settings = action.payload
		},
	},
})

export const { setUser, setSettings } = userSlice.actions

export default userSlice.reducer
