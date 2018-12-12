import { combineReducers } from 'redux';
import Login from './loginReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  Login,routing: routerReducer
});

export default rootReducer;