import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger ,Modal} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from '../actions/actions';
import {Link} from 'react-router-dom';
import Forms from './forms.jsx';
import  $ from 'jquery';

class Main extends React.Component {
    constructor(props) {			console.log('constructor');
        super(props);
       this.state={login:'Login',render:false,isOpen:false};
	   this.selectCategory=this.selectCategory.bind(this);
	   this.hideModal=this.hideModal.bind(this);
	   this.loginForm=this.loginForm.bind(this);
	  }
	  componentDidMount()
	  {
			console.log('did mount');
			this.props.actions.moviesNameAjax();
			this.props.actions.moviesDetailsAjax();
	  }
	   selectCategory(e)
	   {
		   e.preventDefault();
		   var type=e.target.id;
		   if(type=='movie')
		   {
			this.props.history.push("/movies");
			
		   }
	   }
	   loginForm() {
			$(".modalForm").removeClass("deselected");
			//$(".reviews").addClass("selected");
	  };
	
	  hideModal(){
		this.setState({
		  isOpen: false
		});
	  };
	
   render() {
	   console.log('main');
const tooltip = [
  <Tooltip id="movie"><strong>Write a review </strong>on Movies</Tooltip>,
  <Tooltip id="restuarant"><strong>Write a review </strong>on Restaurants</Tooltip>,
  <Tooltip id="stays"><strong>Write a review </strong>on Home Stays</Tooltip>,
  <Tooltip id="companies"><strong>Write a review </strong>on Companies</Tooltip>,
  <Tooltip id="gadgets"><strong>Write a review </strong>on Electronic gadgets</Tooltip>
  ];
       return (
	<div className="reviews">
		<div className="main_header">
			<div className="row">
				<div className="col-lg-10 col-md-9 col-sm-6 col-xs-6">
					<div className="page">
						Write A Review
					</div>
				</div>
				<div className="col-lg-2 col-md-3 col-sm-6 col-xs-6">
					<div className="signIn" onClick={this.loginForm}>
						Sign In
					</div>
					<div className="signUp">
						Sign Up
					</div>
				</div>
			</div>
		</div>
		<div className="sidenav">
			<ul className="categories">
				<li className="movie" id="movie" onClick={this.selectCategory}>Movies</li>
				<li className="restuarants" id="restuarants" onClick={this.selectCategory}>Restaurants</li>
				<li className="vechiles">Vechiles</li>
				<li className="gadgets">Gadgets</li>
				<li className="stay">Stays</li>
				<li className="health">Health</li>
				<li className="health">Tour&Travels</li>
			</ul>
		</div>
		<div className="modalForm deselected">
			
		</div>
	</div>
      );
   }
}
Main.propTypes = {
	actions: PropTypes.object.isRequired,
	formdatas:PropTypes.array.isRequired,
	credentialss: PropTypes.array.isRequired
  };
  
  function mapStateToProps(state, ownProps) {
	return {
		credentials: state.credentials
	};
  }
  
  function mapDispatchToProps(dispatch) {
	return {
	  actions: bindActionCreators(allActions, dispatch)
	};
  }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));