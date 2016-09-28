import axios from 'axios';
export function sendVerificationEmail(email){
	return dispatch => {
		
		return axios.post('/emailVerification',email);
	}
}