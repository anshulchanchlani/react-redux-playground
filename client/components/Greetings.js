import React,{Component} from 'react';

import RaisedButton from 'material-ui/FlatButton'
const style={
	margin:'2px 4px'
}
export default class Greetings extends React.Component{
	render(){
		return(
			<div className='container'>
			<div className='row start'>
				<div className='col-lg-2 col-sm-6 col-md-4 col-xs-12' >
					Hello
				</div>

				<div className='col-lg-2 col-sm-6 col-md-4 col-xs-12' >
					To you
				</div>

				<div className='col-lg-2 col-sm-6 col-md-4 col-xs-12'>
					Mr.
				</div>

				<div className='col-lg-2 col-sm-6 col-md-4 col-xs-12' >
					Anshul
				</div>
				</div>
			</div>
				 
				
			);
	}
}