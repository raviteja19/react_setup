import * as types from '../actions/actionTypes';
import initialState from './intialstate';

export function CheckUserId(state=initialState.checkuseridExistence,action)
{
  switch (action.type) {
    case types.CheckUser:console.log(action.status);
      return action.status;

    default:
      return state;
  }
}