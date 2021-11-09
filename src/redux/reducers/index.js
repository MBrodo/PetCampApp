import { combineReducers } from 'redux'
import campsReducer from '../slices/petCampsSlise'
import BookReducer from '../slices/bookSlice'
import userReducer from '../slices/userSlice'
import fullPetListReducer from '../slices/fullPetsSlice'
import authReducer from '../slices/authentication/authSlice'

const test = () => {
	let testReducer = 'test'
	return testReducer
}

export const reducer = combineReducers({
	menu: test,
	camps: campsReducer,
	booking: BookReducer,
	user: userReducer,
	pets: fullPetListReducer,
	auth: authReducer,
})
