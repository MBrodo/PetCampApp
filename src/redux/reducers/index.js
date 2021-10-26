import { combineReducers } from 'redux'
import campsReducer from '../slices/petCampsSlise'

const test = () => {
	let testReducer = 'test'
	return testReducer
}

export const reducer = combineReducers({
	menu: test,
	camps: campsReducer,
})
