import React,{Component} from 'react';
import NavBar from 'material-ui/AppBar';
import {Link} from 'react-router';
import {grey900} from 'material-ui/styles/colors'
const appBarStyle={
	backgroundColor:grey900,
	margin:'0px',
	width:'100%',
	
}

export default class AppBar extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
				
				<NavBar style={appBarStyle} showMenuIconButton={false}

				 title="Digistorm"  />

				 
			);
	}
}