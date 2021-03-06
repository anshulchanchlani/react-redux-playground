import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleWare from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';
import webpackHotMiddleWare from 'webpack-hot-middleware';
import users from './routes/users';
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.json());

app.use('/users',users);

const compiler = webpack(webpackConfig);
app.use(webpackMiddleWare(compiler,{
	hot:true,
	publicPath: webpackConfig.output.publicPath,
	noInfo:true
}));
app.use(webpackHotMiddleWare(compiler))
app.get('/*',(req,res)=>{
	res.sendFile(path.join(__dirname,'./index.html'));
})



app.listen(3000,()=> console.log("Running on localhost 3000"));