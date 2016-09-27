import React,{Component} from 'react';
import Greetings from './Greetings.js';
import AppBar from './AppBar.js'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();
class App extends React.Component{
	render(){
		return(
			
			<MuiThemeProvider>
			<div className='container-fluid'>
				<div className='row start' >
			<AppBar />
			{this.props.children}
			</div>
			</div>
			</MuiThemeProvider>
			
		);
	}
}

export default App;