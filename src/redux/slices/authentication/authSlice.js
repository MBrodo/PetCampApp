import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	checkAuthenticate: [],
}

export const authSlice = createSlice({
	name: 'checkAuthenticate',
	initialState,
	reducers: {
		setAuth: (state, action) => {
			state.checkAuthenticate = action.payload
		},
	},
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer
