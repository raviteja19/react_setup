import { combineReducers } from 'redux';
import Login from './loginReducer';
import Register from './registerReducer';
import {CheckUserId} from './checkReducer'
import ForgotPassword from './forgotPassword'
import {getMoviesName} from './MoviesReducer'
import {getMoviesDetails} from './MoviesReducer'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  Login,Register,CheckUserId,ForgotPassword,getMoviesName,getMoviesDetails,routing: routerReducer
});

export default rootReducer;