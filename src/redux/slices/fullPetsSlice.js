import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	all: [],
	profilePetsList: [],
	quantity: [],
	petInformation: [],
	type: [],
	typeList: [],
	selected: [],
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
		setSelected: (state, action) => {
			state.selected.push(action.payload)
		},
		setClear: (state) => {
			state.selected = []
		},
		removePet: (state, action) => {
			const index = state.selected.findIndex((elem) => elem.id === action.payload.id)
			state.selected.splice(index, 1)
		},
	},
})

export const {
	setPetsList,
	setPets,
	setPetQuantity,
	setPetInformation,
	setType,
	setTypeList,
	setSelected,
	setClear,
	removePet,
} = fullPetList.actions

export default fullPetList.reducer
