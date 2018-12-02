import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from '../actions/actions';
import fromJquery from '../jquery/formJquery'
import  $ from 'jquery';

class Forms extends React.Component {
      constructor(props) {
        super(props);
        this.state={login:'Login'};
		this.closeForms=this.closeForms.bind(this);
		this.login=this.login.bind(this);
		this.register=this.register.bind(this);
        this.forgotpassword=this.forgotpassword.bind(this);
        this.checkUseridExistence=this.checkUseridExistence.bind(this);
        
	  }
componentDidMount()
{
   
}
closeForms(e)
{
    e.preventDefault();
    $(".modalForm").addClass("deselected");
}
login(event)
{
    event.preventDefault();
var data={userid:this.refs.Luserid.value,password:this.refs.password.value};
    this.props.actions.LoginAjax(data);
}
register(event)
{
    event.preventDefault();
    var data={userid:this.refs.userid.value,password:this.refs.Rpassword.value,cpassword:this.refs.Rcpassword.value};
    //this.props.actions.Register(data);
   if(data.userid==''||data.password==''||data.cpassword=='')
   {
    console.log('fileds should not be empty');
   }else if(data.password.length<8){

   }
   else if(data.password!=data.cpassword){

   } else {
    this.props.actions.registerAjaxCall(data);
   }
   

}
checkUseridExistence(event)
{
    event.preventDefault();
    const data={userid:this.refs.userid.value};
    this.props.actions.checkExistence(data);
}
onchangeRegister(event)
{
    event.preventDefault();
    
    if(this.refs.Rpassword.value==this.refs.Rcpassword.value && this.refs.Rcpassword.value!="")
   {
    
   }else 
   {
   
   }
}
forgotpassword(event)
{console.log('forgot password');
    event.preventDefault();
    var data={userid:this.refs.userids.value,email:this.refs.forgotpassword.value};
    this.props.actions.forgotPasswordAjax(data);

}
	

   render()
{   
     var checkuser=this.props.checkUser;var checkclassname="notexisting",checkValue="";
     if(checkuser=='true')
    {   console.log(checkuser)
        checkclassname="existing";
        checkValue="Userid already existing";
    }console.log(this.props.forgotpassword);
     return(
        <div className="forms">
            <div className="pull-right close" onClick={this.closeForms}>X</div>
            <div className="header">
                <div className="login" id="login">
                    <span className="log">Login</span>
                </div>
                <div className="Register" id="register">
                    <span className="reg">Register</span>
                </div>
            </div>
            <div className="modalboady">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xs-8" id="loginform">
                        <div className="login" id="loginpage">
                            <form  onSubmit={this.login}>
                            <div className="form-group">
                                <label htmlFor="usr">User ID:</label>
                                <input ref="Luserid" type="text" className="form-control" id="usr"/>
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass">Password:</label>
                                <input ref="password" type="password" className="form-control" id="pass"/>
                            </div>
                            <div className="error">
                                <span className="message">Userid or password is incorrect</span>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-success" value="Submit"/>
                            </div>
                            <div className="forgotPassword" id="forgot">
                                <span className="forgot">Forgot Password?</span>
                            </div>
                            </form>
                        </div>
                        <div className="forgotpassword" id="forgotpassword">
                            <i className="glyphicon glyphicon-arrow-left"></i>
                            <span className="icon_text">Forgot Password?</span>
                            <form onSubmit={this.forgotpassword}>
                            <div className="form-group">
                                <label htmlFor="userids">Enter Registered Userid:</label>
                                <input ref="userids" type="text" className="form-control" id="userids"/>
                                <label htmlFor="email">Enter Your email id:</label>
                                <input ref="forgotpassword" type="text" className="form-control" id="email"/>
                            </div>
                            <div className="form-groups">
                                <input type="submit" className="btn btn-success" value="submit"/>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xs-8" id="registerform">
                        <div className="register">
                            <form onSubmit={this.register} id="registerValidation">
                            <div className="form-group">
                                <label htmlFor="usrid">User ID:</label>
                                <input ref="userid" type="text" className="form-control" id="usrid" placeholder="User ID / Emai Id " onBlur={this.checkUseridExistence}/>
                                <span className={checkclassname}>{checkValue}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Create Password:</label>
                                <input ref="Rpassword" type="password" className="form-control" id="password" name="password" onChange={this.onchangeRegister.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmpassword">Confirm Password:</label>
                                <input ref="Rcpassword" type="password" className="form-control" id="confirmpassword" name="confirmpassword" onChange={this.onchangeRegister.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-success" value="Register"/>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

Forms.propTypes = {
	actions: PropTypes.object.isRequired,
    checkUser:PropTypes.string.isRequired,
    forgotpassword:PropTypes.string.isRequired
  };
  
  function mapStateToProps(state, ownProps) {
     
	return {
      checkUser:state.CheckUserId,
      forgotpassword:state.ForgotPassword
	};
  }
  
  function mapDispatchToProps(dispatch) {
	return {
	  actions: bindActionCreators(allActions, dispatch)
	};
  }
export default connect(mapStateToProps, mapDispatchToProps)(Forms);