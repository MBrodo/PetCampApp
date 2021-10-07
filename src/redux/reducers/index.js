import { combineReducers } from 'redux';

const test = () => {
  let testReducer = 'test'
  return testReducer
}

export const reducer = combineReducers({
  menu: test,
});