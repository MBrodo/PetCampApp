import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	all: [],
	profilePetsList: [],
	quantity: [],
	petInformation: [],
	type: [],
	typeList: [],
}

export const fullPetList = createSlice({
	name: 'all',
	initialState,
	reducers: {
		setPetsList: (state, action) => {
			state.all = action.payload
		},
		setPets: (state, action) => {
			state.profilePetsList = action.payload
		},
		setPetQuantity: (state, action) => {
			state.quantity = action.payload
		},
		setPetInformation: (state, action) => {
			state.petInformation = action.payload
		},
		setType: (state, action) => {
			state.type = action.payload
		},
		setTypeList: (state, action) => {
			state.typeList = action.payload
		},
	},
})

export const { setPetsList, setPets, setPetQuantity, setPetInformation, setType, setTypeList } =
	fullPetList.actions

export default fullPetList.reducer
