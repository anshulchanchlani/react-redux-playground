import React,{Component} from 'react';
import Greetings from './Greetings.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();
class App extends React.Component{
	render(){
		return(
			<MuiThemeProvider>
			<Greetings />
			</MuiThemeProvider>
		);
	}
}

export default App;