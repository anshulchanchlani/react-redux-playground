import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SubmitButton from 'material-ui/RaisedButton';
import validateInput from '../../../server/shared/validations/signUpPageValidation';
import {connect} from 'react-redux';
import {sendVerificationEmail} from '../../actions/signUpActions'; 



var style={
  marginBottom:'20px',

}
var backgroundStyle,textStyle,textFieldStyle,hintStyle;
 
var textStyle = {fontFamily:"'Roboto', sans-serif", margin:'10% 30%', textAlign:'center',color:"#FFFFFF"};

 textStyle = {fontFamily:"'Roboto', sans-serif", textAlign:'center'};

 textFieldStyle ={
  textAlign:'center',
  width:'400px'
  
}
 hintStyle ={
textAlign:'center',
width:"100%",
 

}

class SignUpPage extends React.Component{
  constructor(props){
   super(props);
   this.state = {email: "",errorText:''};
   this.TextFieldHandler = this.TextFieldHandler.bind(this);
 }
 onKeyDown(e){
    if(e.keyCode==13){
      this.SubmitButtonHandler();
    }
   
 }
 isValid(){
  const {errors,isValid} = validateInput(this.state);
  if(!isValid){
    this.setState({errorText:errors.email})
  }
  return isValid;
 }
  TextFieldHandler(e) {
        this.setState({
            email: e.target.value,
            errorText:''
        });

    };
  SubmitButtonHandler(){
    var that = this;
    if(this.isValid()){
            this.setState({errorText:''});
             this.props.sendVerificationEmail(this.state)
             .then(function(response){
              
             })
             .catch(function(error){
              that.setState({errorText:error.response.data.email});
             })
           }
     }

render(){
    const {sendVerificationEmail} = this.props;
    

    
    return(
      <div id = "regTextWrapper">
        <div style = {textStyle}>
          <h1> Wipro Events </h1>
          <h3> Design and Innovate.</h3>
          <TextField name="email" style={style} errorText={this.state.errorText} hintText="Enter your email id" onChange={this.TextFieldHandler}  onKeyDown={this.onKeyDown.bind(this)}  hintStyle={hintStyle} inputStyle={textFieldStyle} fullWidth={true} />
          <br/>
          <SubmitButton primary={true} onClick={this.SubmitButtonHandler.bind(this)}   label="Let's do it" />
        </div>
      </div>
    );
  }
}
 
export default connect(null,{sendVerificationEmail} )(SignUpPage);  