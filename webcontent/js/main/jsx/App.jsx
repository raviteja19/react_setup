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
       this.state={login:'Login'};

	  }
	  componentDidMount()
	  {
        $(document).ready(function(){
          $("#login").click(function(){
              $("#myModal").modal();
          });
        });

        if(!$.isEmptyObject(this.props.loginstatus))
        {
            this.setState({username:this.props.loginstatus.profileObj.name});
        }
    }
    
    componentWillReceiveProps(nextprops)
    {

      if(!$.isEmptyObject(nextprops.loginstatus))
      {
         // console.log(nextprops.loginstatus)
         this.setState({username:nextprops.loginstatus.profileObj.name});
      }
    }



   render() {
var me=this;
       return (
  <div className="tokennumber">
      React Setup
  </div>
      );
   }
}
App.propTypes = {
	actions: PropTypes.object.isRequired,
    loginstatus:PropTypes.object.isRequired
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));