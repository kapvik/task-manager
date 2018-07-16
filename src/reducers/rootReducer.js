import { combineReducers } from 'redux'
import { RECEIVE_DATA } from '../actions/actionsTypes'

function dataUser (state = [], action) {
	switch (action.type) {
		case RECEIVE_DATA:
			return Object.assign( {}, state, {user: action.data})
		default:
			return state
	}
}

const rootReducer = combineReducers({
	dataUser,
})

export default rootReducer