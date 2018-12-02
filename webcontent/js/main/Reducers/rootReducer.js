import { combineReducers } from 'redux';
import Login from './loginReducer';
import Register from './registerReducer';
import {CheckUserId} from './checkReducer'
import ForgotPassword from './forgotPassword'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  Login,Register,CheckUserId,ForgotPassword,routing: routerReducer
});

export default rootReducer;