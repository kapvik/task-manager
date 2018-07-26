import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import { authentication } from './authentication.reducer'
import { registration } from './registration.reducer'
import { dataUser } from './user.reducer'
import { chatData } from './chat.reducer'
import { tasksData } from './task.reducer'
import { authForm } from './show.reducer'

const rootReducer = combineReducers({
  dataUser,
  tasksData,
  chatData,
  authForm,
  authentication,
  registration,
  form: formReducer
})

export default rootReducer
