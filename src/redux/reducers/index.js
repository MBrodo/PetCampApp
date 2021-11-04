import { combineReducers } from 'redux'
import campsReducer from '../slices/petCampsSlise'
import petReducer from '../slices/petListSlice'
import BookReducer from '../slices/bookSlice'
import userReducer from '../slices/userSlice'
import fullPetListReducer from '../slices/fullPetsSlice'

const test = () => {
	let testReducer = 'test'
	return testReducer
}

export const reducer = combineReducers({
	menu: test,
	camps: campsReducer,
	pets: petReducer,
	book: BookReducer,
	user: userReducer,
	petsList: fullPetListReducer,
})
