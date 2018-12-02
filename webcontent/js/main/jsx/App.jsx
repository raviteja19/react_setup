import React  from 'react';
import PropTypes from 'prop-types';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import  $ from 'jquery';
import DesignQuestion from './DesignQuestion.jsx';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from '../actions/actions';
import Forms from './forms.jsx';
import fromJquery from '../jquery/formJquery'

class App extends React.Component {
     constructor(props) {
        super(props);
       this.state={login:'Login',render:false,isOpen:false};

	  }
	  componentDidMount()
	  {

	}

   render() {console.log(this.props.loginstatus)
var me=this;
const tooltip = [
  <Tooltip id="movie"><strong>Write a review </strong>on Movies</Tooltip>,
  <Tooltip id="restuarant"><strong>Write a review </strong>on Restaurants</Tooltip>,
  <Tooltip id="stays"><strong>Write a review </strong>on Home Stays</Tooltip>,
  <Tooltip id="companies"><strong>Write a review </strong>on Companies</Tooltip>,
  <Tooltip id="gadgets"><strong>Write a review </strong>on Electronic gadgets</Tooltip>
  ];
       return (
	<div className="reviews">
		<div className="setup">React Setup 
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