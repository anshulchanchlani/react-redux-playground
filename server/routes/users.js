import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
let Router = express.Router();
 	Router.post('/',function(req,res){

		const {errors,isValid} = validateInput(req.body);
		if(!isValid)
		res.status(400).json(errors);
	})

function validateInput(data){
	let errors ={};

	// if(Validator.isNull(data.email)){
	// 	errors.email = 'This field is required';
	// }

	if(!Validator.isEmail(data.email)){
		errors.email = 'Email is invalid';
	}

	return{
		errors,
		isValid: isEmpty(errors)
	}
}
export default Router;