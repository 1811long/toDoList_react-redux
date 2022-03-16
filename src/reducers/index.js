import { combineReducers } from 'redux'
import todoReducer from './todoReducer'

const allReducer = combineReducers({
    todo: todoReducer
}) 

export default allReducer

