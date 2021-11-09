import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	id: [],
}

export const userSlice = createSlice({
	name: 'id',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.id = action.payload
		},
	},
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
