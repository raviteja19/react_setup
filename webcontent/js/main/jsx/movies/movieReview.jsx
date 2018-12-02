import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as allActions from '../../actions/actions';
import  $ from 'jquery';

class MoviesReview extends React.Component {
constructor(props)
{
    super(props);
    this.state={moviesName:[],movieDetails:[]};
}

render()
 {  
    var  imagesrc="images/"+this.props.match.params.name+".jpg";
 return(
        <div className="Review">
            <div className="Review_header">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="header">Write a review on <span className="moviename">{this.props.match.params.name}</span> Movie</div>
                    </div>
                </div>
            </div>
            <div className="Review_body">
                <div className="Review_movie_details">
                    <div className="row">
                        <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">


                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">

                        </div>
                    </div>
                </div>
                <div className="Review_details">
                    
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(MoviesReview);