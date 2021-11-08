import { combineReducers } from 'redux'
import campsReducer from '../slices/petCampsSlise'
import petReducer from '../slices/petListSlice'
import BookReducer from '../slices/bookSlice'
import userReducer from '../slices/userSlice'
import fullPetListReducer from '../slices/fullPetsSlice'
import authReducer from '../slices/authentication/authSlice'
import dateEndReducer from '../slices/dates/dateEndSlice'
import dateStartReducer from '../slices/dates/dateStartSlice'
import totalDayReducer from '../slices/dates/totalDay'

const test = () => {
	let testReducer = 'test'
	return testReducer
}

export const reducer = combineReducers({
	menu: test,
	camps: campsReducer,
	pets: petReducer,
	booking: BookReducer,
	user: userReducer,
	petsList: fullPetListReducer,
	auth: authReducer,
	dateEnd: dateEndReducer,
	dateStart: dateStartReducer,
	totalDays: totalDayReducer,
})
