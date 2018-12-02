import * as types from '../actions/actionTypes';
import initialState from './intialstate';

export default function Register(state = initialState.register, action) {
    switch (action.type) {
    case types.Register:
      return action.registerform;

    default:
      return state;
  }
}

