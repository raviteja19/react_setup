import * as types from './actionTypes';

  export function Login(loginform) {
    return {type: types.Login, loginform};
  }
  
  export function Register(registerform) {
    return {type: types.Register, registerform};
  }

  export function CheckUser(status) {
    return {type: types.CheckUser, status};
  }
  export function forgotpassword(data) {
    return {type: types.forgotPassword, data};
  }


export function checkExistence(data)
{
  return function(dispatch)
  {
    var url = 'http://localhost:8080/api/checkuser';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), 
      credentials: 'omit',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.text())
    .catch(error => console.error('Error:', error))
    .then(response => dispatch(CheckUser(response)));
  }
}

export function forgotPasswordAjax(data)
{
  return function(dispatch)
  {
    var url = 'http://localhost:8080/api/forgotpassword';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), 
      credentials: 'omit',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.text())
    .catch(error => console.error('Error:', error))
    .then(response => dispatch(forgotpassword(response)));
  }
}

export function LoginAjax(data)
{
  return function(dispatch)
  {
    var url = 'http://localhost:8080/api/login';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), 
      credentials: 'omit',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.text())
    .catch(error => console.error('Error:', error))
    .then(response => dispatch(Login(response)));
  }
}

