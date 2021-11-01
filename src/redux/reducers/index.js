import { combineReducers } from 'redux'
import campsReducer from '../slices/petCampsSlise'
import petReducer from '../slices/petListSlice'

const test = () => {
	let testReducer = 'test'
	return testReducer
}

export const reducer = combineReducers({
	menu: test,
	camps: campsReducer,
	pets: petReducer,
})
