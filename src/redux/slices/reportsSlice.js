import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	all: [],
	profileReportsList: [],
}

export const profileReportsList = createSlice({
	name: 'reports',
	initialState,
	reducers: {
		setReportsList: (state, action) => {
			state.all = action.payload
		},
		setReports: (state, action) => {
			state.profileReportsList = action.payload
		},
	},
})

export const { setReportsList, setReports } = profileReportsList.actions

export default profileReportsList.reducer
