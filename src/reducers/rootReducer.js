import { combineReducers } from 'redux'
import { RECEIVE_DATA, EDIT_USER_START, EDIT_USER_STOP, EDIT_USER_CANCEL } from '../actions/actionsTypes'

function dataUser (state = [], action) {
	switch (action.type) {
		case RECEIVE_DATA:
			return Object.assign( {}, state, {user: action.data})
		default:
			return state
	}
}

function editing(state = [], action) {
	switch (action.type) {
		case EDIT_USER_START:
			return Object.assign( {}, state, {isEditing: action.isEdit})
		case EDIT_USER_STOP:
			return Object.assign( {}, state, { isEditing: action.isEdit, editData: action.newData})
		case EDIT_USER_CANCEL:
			return Object.assign( {}, state, {isEditing: action.isEdit})
		default:
			return state
	}
}


const rootReducer = combineReducers({
	dataUser,
	editing
})

export default rootReducer