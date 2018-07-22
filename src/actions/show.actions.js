import { showConstants } from '../constants'

export const showForm = show => ({
  type: showConstants.FORM_SHOW,
  show
})

export const showFormAuth = show => {
  return dispatch => dispatch(showForm(show))
}