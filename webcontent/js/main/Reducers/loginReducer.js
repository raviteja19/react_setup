import * as types from '../actions/actionTypes';
import initialState from './intialstate';

export default function Login(state = initialState.loginstatus, action) {
  switch (action.type) {
    case types.Login:console.log(action.loginform)
      return action.loginform;

    default:
      return state;
  }
}

