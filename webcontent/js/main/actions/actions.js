import * as types from './actionTypes';
import Axios from "axios";

  export function Login(loginform) {
    return {type: types.Login, loginform};
  }
  
  // export function LoginUser() {
  //   return function(dispatch) {
  //     // Returns a promise
  //     return Axios.get(API_SURVEY.downloadCSV)
  //       .then(response => {
  //         // Dispatch another action to consume data
  //         dispatch(fetchSurveySuccess(response.data));
  //       })
  //       .catch(error => {
  //         throw error;
  //       });
  //   };
  // }

// export function checkExistence(data)
// {
//   return function(dispatch)
//   {
//     var url = 'http://localhost:8080/api/checkuser';
//     fetch(url, {
//       method: 'POST', // or 'PUT'
//       body: JSON.stringify(data), 
//       credentials: 'omit',
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       })
//     }).then(res => res.text())
//     .catch(error => console.error('Error:', error))
//     .then(response => dispatch(CheckUser(response)));
//   }
// }

