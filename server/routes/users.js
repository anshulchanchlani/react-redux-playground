import express from 'express';
import Validator from 'validator';
import validateInput from '../shared/validations/signUpPageValidation.js'
let Router = express.Router();
 	Router.post('/',function(req,res){

		const {errors,isValid} = validateInput(req.body);
		if(!isValid)
		res.status(400).json(errors);
	})


export default Router;