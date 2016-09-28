import React,{Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router,browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import Routes  from './routes';

const store = createStore((state={}) => state,
	applyMiddleware(thunk));
console.log(Routes);

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={Routes} ></Router>
	</Provider>
	,document.getElementById('app')
	);