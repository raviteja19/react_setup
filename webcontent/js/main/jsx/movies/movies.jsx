import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as allActions from '../../actions/actions';
import  $ from 'jquery';

class Movies extends React.Component {
constructor(props)
{
    super(props);
    this.getMoviesName=this.getMoviesName.bind(this);
    this.movieSearch=this.movieSearch.bind(this);
    this.getMovieDetails=this.getMovieDetails.bind(this);
    this.WriteReview=this.WriteReview.bind(this);
    this.state={moviesName:[],movieDetails:[]};
}
    componentDidMount()
{
    $(".movieList").addClass("deselect");
    
    this.props.actions.moviesNameAjax();
    this.props.actions.moviesDetailsAjax();
    
}
componentWillReceiveProps(nextProps)
{
    this.setState({moviesName:nextProps.moviesName,movieDetails:nextProps.movieDetails});
}

WriteReview(event)
{
    event.preventDefault();
    var moviename=$(event.target).attr('id');
    this.props.history.push("/moviereview/"+moviename);
}
movieSearch(event)
{
    event.preventDefault();
    var movieNames=this.props.moviesName;
    if(event.target.value.length>0)
    {
         $(".movieList").removeClass("deselect");
        movieNames=  movieNames.filter(function(item){
        return item.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
          
      });
    }else 
    {
        $(".movieList").addClass("deselect");

    }
    this.setState({moviesName:movieNames});
}

getMoviesName(movie,arrayIndex)
{
    
return (
        <div className="moviesNames" key={arrayIndex}>
            <div id={movie} className="name" onClick={this.WriteReview}>{movie}</div>
        </div>
        );

}
getMovieDetails(details,index)
{

    var percentage=(details.userrating/5)*100+"%";
   var spanStyle={width:percentage};
   var imagesrc="images/"+details.name+".jpg";
   var releasedate = details.releasedate.split(' ')[0];
    return (
    <div className="details" key={index}>
        <div className="header">
            {details.name}
        </div>
        <div className="row">
            <div className="col-sm-5 col-md-5 col-lg-5 col-xs-5">
                <img  id={details.name} onClick={this.WriteReview} src={imagesrc} className="image"/>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5 col-xs-5">
                <div className="row">
                    <p className="actors">{details.actors}</p>
                    <span className="ratings">User Rating's : </span>
                    <span className="rating">{details.userrating}</span>
                    <span className="img">
                    <span className="imagerating" style={spanStyle}></span>
                    </span>
                    <div className="origin">{details.origin}</div>
                    <div className="release">{releasedate}</div>
                </div>
            </div>
        </div>
    </div>
    );
}
render()
 {  
 return(
 <div className="movie_review">
    <div className="movie_header">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="header">Write a review on Movies</div>
            </div>
        </div>
    </div>
    <div className="movie_body">
        <div className="search">
            <div className="row">
                <div className="col-sm-9 col-md-12 col-lg-10 col-xs-12">
                    <div className="movie-group">
                        <input type="text" ref="search" className="movie-control" placeholder="Search for movie" id="search" 
                        onChange={this.movieSearch}/>
                    </div>
                    <div className="movie-group-list">
                        <div className="movieList">
                            {this.state.moviesName.map(this.getMoviesName)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
                <div className="searchBody">
                     <div className="movieDetails" >
                        {this.state.movieDetails.map(this.getMovieDetails)}
                     </div>
                </div>
            </div>
        </div>    
    </div>
</div>
        );
    }
}

Movies.propTypes = {
	actions: PropTypes.object.isRequired,
    moviesName:PropTypes.array.isRequired,
    movieDetails:PropTypes.array.isRequired
  };

function mapStateToProps(state, ownProps) {
  	return {
      moviesName:state.getMoviesName,
      movieDetails:state.getMoviesDetails
		};
  }
  
  function mapDispatchToProps(dispatch) {
	return {
	  actions: bindActionCreators(allActions, dispatch)
	};
  }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movies));