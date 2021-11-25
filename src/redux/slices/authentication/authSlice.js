import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	status: false,
}

export const authSlice = createSlice({
	name: 'status',
	initialState,
	reducers: {
		setAuth: (state, action) => {
			state.status = action.payload
		},
	},
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer
