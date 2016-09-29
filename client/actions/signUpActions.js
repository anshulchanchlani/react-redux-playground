import axios from 'axios';
export function sendVerificationEmail(email){
	return dispatch => {
		console.log('sending email to server as ', email)
		return axios.post('/users',email);
	}
}