import { RECEIVE_DATA } from './actionsTypes'
import axios from 'axios'


export const receiveData = data => ({
	type: RECEIVE_DATA,
	data
})

export const fetchData = () => {
	return (dispatch) => {
		return axios.get('https://randomuser.me/api/')
			.then(response =>  {
				dispatch(receiveData(response.data.results))
			})
			.catch(error => {
				console.log(error)
			})
	}
}