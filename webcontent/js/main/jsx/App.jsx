import React  from 'react';
import PropTypes from 'prop-types';
import { Route, Link, withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from '../actions/actions';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
class App extends React.Component {
     constructor(props) {
        super(props);
       this.state={login:'Login',render:false,isOpen:false
      ,username:'',
      tokentypes:['Hospitals','Campus Hiree','Event Management']};
      this.responseGoogle=this.responseGoogle.bind(this);
      this.loginmodal=this.loginmodal.bind(this);
      this.responseGoogle=this.responseGoogle.bind(this);
      this.responseFacebook=this.responseFacebook.bind(this);
      this.GoogleSignOut=this.GoogleSignOut.bind(this);
	  }
	  componentDidMount()
	  {
        $(document).ready(function(){
          $("#login").click(function(){
              $("#myModal").modal();
          });
        });
	  }
    responseGoogle(response) {
     
      this.setState({username:response.profileObj.name});
    }

    GoogleSignOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      console.log(auth2)
      auth2.signOut().then( ()=> {
        this.setState({username:''});
        
      });
      auth2.disconnect().then(()=>{
        location.reload();
      });
    }
    responseFacebook(response) {
      console.log(response);
    }

    loginmodal()
    {

      return (
        <div>
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <div className="row">
                    <div className="googlelogin">
                      <label>Sign In to get instant access to our site</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="googlelogin">
                          <GoogleLogin
                          clientId="832635574791-a7guh7sl87dcr3foh7heoechiva6p1e5.apps.googleusercontent.com"
                          buttonText="Login With Google"
                          className="google-login"
                          onSuccess={this.responseGoogle}
                          onFailure={this.responseGoogle}
                          />
                    </div>
                  </div>
                  <div className="row">
                    <div className="googlelogin">
                      <label>OR</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="googlelogin">
                          <FacebookLogin
                            appId="1088597931155576"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={this.responseFacebook} 
                          />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">

                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

TokenTypes(tokentype,i)
{

  return (
    <div key={i} className="col-sm-12 col-xs-12 col-md-6 col-lg-4 next-row">
      <div className="card">
        <h5 className="card-header">
          {tokentype}
        </h5>
        <div className={"card-body "+tokentype}>
            <div className="card-body-inner">
              
            </div>
        </div>
      </div>
    </div>
  );
}

   render() {console.log(this.props.loginstatus)
var me=this;
       return (
	<div className="tokennumber">
		<nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>                        
          </button>
          <Link className="navbar-brand" to="/">
            TokenNumber
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><i className="fa fa-home"></i> Home</a></li>
            <li><a href="#"><i className="fa fa-user"></i> {this.state.username}</a></li>
            <li id="login"><a href="#"><i className="fa fa-sign-in"></i> Login</a></li>
            <li onClick={this.GoogleSignOut}><a href="#"><i className="fa fa-sign-out"></i> Sign Out</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="row">
      <div className=""></div>
      {this.loginmodal()}
      <div className="welcomebox">
        <div className="welcomemessage">
          <h5 className="header">
            Hi,Welcome to TokenNumber.com
          </h5>
        </div>
        <div className="row">
            {this.state.tokentypes.map(this.TokenTypes)}
        </div>
      </div>
    </div>
	</div>
      );
   }
}
App.propTypes = {
	actions: PropTypes.object.isRequired,
    loginstatus:PropTypes.string.isRequired
  };

function mapStateToProps(state, ownProps) {
     
	return {
	  loginstatus:state.Login
		};
  }
  
  function mapDispatchToProps(dispatch) {
	return {
	  actions: bindActionCreators(allActions, dispatch)
	};
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);